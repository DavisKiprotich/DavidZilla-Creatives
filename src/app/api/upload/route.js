import { writeFile, mkdir, readFile, existsSync } from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')
  const title = formData.get('title')
  const category = formData.get('category')

  if (!file || !title || !category) {
    return NextResponse.json({ success: false, message: 'Missing fields' })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const safeCategory = category.replace(/[^a-zA-Z0-9-_ ]/g, '')
  const safeTitle = title.replace(/[^a-zA-Z0-9-_ ]/g, '')
  const ext = file.name.split('.').pop()
  const fileName = `${safeTitle.trim().replace(/\s+/g, '-')}.${ext}`

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', safeCategory)
  const metadataPath = path.join(process.cwd(), 'public', 'uploads', 'projects.json')

  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true })
  }

  const filePath = path.join(uploadDir, fileName)
  await writeFile(filePath, buffer)

  // ✅ Save metadata
  const newProject = {
    title,
    category,
    image: `/uploads/${safeCategory}/${fileName}`,
  }

  let existingProjects = []
  try {
    const content = await readFile(metadataPath, 'utf-8')
    existingProjects = JSON.parse(content)
  } catch (err) {
    existingProjects = []
  }

  existingProjects.push(newProject)
  await writeFile(metadataPath, JSON.stringify(existingProjects, null, 2))

  return NextResponse.json({ success: true, path: newProject.image })
}
