import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import {IoMailUnreadOutline} from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="text-white py-10 px-6 md:px-16 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/darkblue.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold italic">DZilla</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About us</a></li>
            <li><a href="#" className="hover:text-gray-400">Collections</a></li>
            <li><a href="#" className="hover:text-gray-400">Events</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p>Nairobi, Kenya</p>
          <p className="mt-2"><FaPhoneAlt/>(617) 987-6543</p>
          <p><IoMailUnreadOutline />info@museumwp.com</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold text-lg mb-3">GET IN TOUCH</h3>
          <div className="flex flex-col items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 mt-3 rounded-full">
              Hola
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm border-t border-gray-600 pt-4">
        © Copyright 2024. All Rights Reserved by Artfy
      </div>
    </footer>
  )
}

export default Footer