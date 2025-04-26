'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react";
import { signIn, useSession, signOut } from 'next-auth/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn('google', { callbackUrl: '/' }); // redirect to /home after login
  }

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[rgba(255,255,255,0.25)] backdrop-blur-md fixed w-full z-20">
      {/* Logo */}
      <div className="text-2xl font-bold text-textBlue">DZilla</div>

      {/* Desktop Menu - Centered */}
      <ul className="hidden md:flex space-x-6 text-primary mx-auto">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#collections">Collections</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

      {/* Contact Us (Only for large screens) */}
      <div className="hidden md:flex items-center gap-4">
        {!session ? (
          <button
            onClick={handleLogin}
            className="bg-secondary text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Sign out
          </button>
        )}
      </div>

      {/* Hamburger Menu - Right Aligned */}
      <div className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-0 w-1/2 bg-gray-100 p-4 shadow-md flex flex-col space-y-4 md:hidden">
          <li className='hover:text-secondary'><Link href="/">Home</Link></li>
          <li className='hover:text-secondary'><Link href="#about">About Us</Link></li>
          <li className='hover:text-secondary'><Link href="#collections">Collections</Link></li>
          <li className='hover:text-secondary'><Link href="#contact">Contact Us</Link></li>
          <li className='hover:text-secondary'>
            {!session ? (
              <button onClick={handleLogin}>Login</button>
            ) : (
              <button onClick={() => signOut()}>Sign out</button>
            )}
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;
