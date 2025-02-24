'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[rgba(255,255,255,0.25)] backdrop-blur-md fixed w-full z-20">
      <div className="text-2xl font-bold text-primary">DZilla</div>
      
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
      <ul className={`md:flex space-x-6 text-primary ${isOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#collections">Collections</Link></li>
        <li><Link href="#post">Post</Link></li>
      </ul>
      <div>
        <button className="text-primary mr-4">Log In</button>
        <button className="bg-secondary text-white px-4 py-2 rounded-lg">Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar