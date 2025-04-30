import { NextResponse } from 'next/server'
import path from 'path'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main'

export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')
  const title = formData.get('title')
  const category = formData.get('category')

  if (!file || !title || !category) {
    return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const safeCategory = category.replace(/[^a-zA-Z0-9-_ ]/g, '')
  const safeTitle = title.replace(/[^a-zA-Z0-9-_ ]/g, '')
  const ext = file.name.split('.').pop()
  const fileName = `${safeTitle.trim().replace(/\s+/g, '-')}.${ext}`

  const filePath = `public/uploads/${safeCategory}/${fileName}`
  const metadataPath = 'public/uploads/projects.json'

  const githubApiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/`

  async function getShaIfExists(filepath) {
    const res = await fetch(`${githubApiUrl}${filepath}?ref=${GITHUB_BRANCH}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
    if (res.status === 200) {
      const json = await res.json()
      return json.sha
    }
    return null
  }

  async function uploadFile(filepath, content) {
    const sha = await getShaIfExists(filepath)
    const payload = {
      message: `Upload ${filepath}`,
      content: buffer.toString('base64'),
      branch: GITHUB_BRANCH,
      ...(sha && { sha }),
    }

    const res = await fetch(`${githubApiUrl}${filepath}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('GitHub upload error:', err)
      throw new Error('Failed to upload file to GitHub.')
    }
  }

  async function updateMetadata() {
    let existing = []
    let sha = null
    try {
      const res = await fetch(`${githubApiUrl}${metadataPath}?ref=${GITHUB_BRANCH}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      })
      if (res.ok) {
        const json = await res.json()
        existing = JSON.parse(Buffer.from(json.content, 'base64').toString())
        sha = json.sha
      }
    } catch (err) {
      console.warn('projects.json not found, will create new.')
    }

    const newProject = {
      title,
      category,
      image: `/uploads/${safeCategory}/${fileName}`,
    }
    existing.push(newProject)

    const payload = {
      message: `Update ${metadataPath}`,
      content: Buffer.from(JSON.stringify(existing, null, 2)).toString('base64'),
      branch: GITHUB_BRANCH,
      ...(sha && { sha }),
    }

    const res = await fetch(`${githubApiUrl}${metadataPath}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('GitHub metadata upload error:', await res.json())
      throw new Error('Failed to update projects.json on GitHub.')
    }
  }

  try {
    await uploadFile(filePath, buffer)
    await updateMetadata()
    return NextResponse.json({ success: true, path: `/uploads/${safeCategory}/${fileName}` })
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}
