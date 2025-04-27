'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function UploadForm() {
  const { data: session } = useSession()
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Logo")

  if (!session) return null

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file || !title || !category) return alert("All fields are required.")

    const data = new FormData()
    data.set('file', file)
    data.set('title', title)
    data.set('category', category)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: data,
    })

    if (!res.ok) return alert("Upload failed.")

    alert("Upload successful!")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border p-4 rounded-md text-secondary">
      <input type="text" placeholder="Name of the file" className="w-full p-1 rounded-sm border border-textBlue" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full text-textBlue border border-textBlue">
        <option>Logo</option>
        <option>Business Card</option>
        <option>Flyer</option>
        <option>Company Profile</option>
      </select>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md">Upload</button>
    </form>
  )
}
