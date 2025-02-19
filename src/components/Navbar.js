import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 px-8 bg-[rgba(255,255,255,0.25)] backdrop-blur-md fixed w-full z-20">
      <div className="text-2xl font-bold text-primary">Artfy</div>
      <ul className="flex space-x-8 text-lg font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/collections">Collections</Link></li>
        <li><Link href="/post">Post</Link></li>
      </ul>
      <div>
        <button className="text-primary mr-4">Log In</button>
        <button className="bg-secondary text-white px-4 py-2 rounded-lg">Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar