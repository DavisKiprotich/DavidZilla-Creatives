import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
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

  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true })

  const filename = `${Date.now()}_${file.name}`
  const filePath = path.join(uploadDir, filename)
  await writeFile(filePath, buffer)

  // Update project list
  const jsonPath = path.join(uploadDir, 'projects.json')
  const existingData = existsSync(jsonPath) ? JSON.parse(await readFile(jsonPath, 'utf-8')) : []

  const newProject = {
    id: Date.now(),
    title,
    category,
    image: `/uploads/${filename}`,
  }

  existingData.push(newProject)
  await writeFile(jsonPath, JSON.stringify(existingData, null, 2))

  return NextResponse.json({ success: true, path: newProject.image })
}
