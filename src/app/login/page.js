'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginPage() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" id='login'>
      {!session ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">Sign in to upload your work</h1>
          <button
            onClick={() => signIn('google')}
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h1 className="text-xl font-semibold mb-2">Welcome, {session.user.name}</h1>
          <p className="mb-4">You are signed in as {session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  )
}
