// app/api/session/route.js
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth' // Adjust to your setup

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return Response.json({ email: null })
  return Response.json({ email: session.user.email })
}
