import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMailUnreadOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer id='footer' className="text-white py-10 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/darkblue.jpg')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold italic">DZilla</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { text: "About us", link: "#about" },
              { text: "Collections", link: "#collections" },
              { text: "Events", link: "#catalogue" }
            ].map((item, index) => (
              <li key={index} className="relative group pl-4">
                <a
                  href={item.link}
                  className="hover:text-secondary text-white transition-all duration-300 flex items-center"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p>Nairobi, Kenya</p>
          <p className="mt-2 flex items-center space-x-2">
            <FaPhoneAlt /><span>(254) 791 083 661</span>
          </p>
          <p className="flex items-center space-x-2">
            <IoMailUnreadOutline /><span>dzillacreative@gmail.com</span>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold text-lg mb-3">GET IN TOUCH</h3>
          <div className="flex flex-col items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none border border-gray-300"
            />
            <a href="mailto:dzillacreative@gmail.com?subject=Contact Signup" className="w-full">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 mt-3 rounded-full w-full">
                Send
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm border-t border-gray-600 pt-4">
        © Copyright 2025. All Rights Reserved by Dave
      </div>
    </footer>
  );
}

export default Footer;