import React from 'react'
import { FaGithub, FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
      <div className="bg-gray-100 text-textBlue min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold">Contact us</h2>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra
            porttitor libero netus nulla tempor cont.
          </p>
          
          <div className="mt-6 space-y-4">
            <button className="flex items-center gap-3 bg-secondary text-white px-4 py-2 rounded-lg w-fit">
              <FaGithub size={20} /> Contribute GitHub
            </button>
            <button className="flex items-center gap-3 bg-secondary text-white px-4 py-2 rounded-lg w-fit">
              <FaDiscord size={20} /> Join our community
            </button>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex gap-3 mt-3">
              <span className="bg-secondary p-2 rounded-lg"><FaGithub size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaFacebook size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaTwitter size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaInstagram size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaLinkedin size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaYoutube size={20} className="text-white" /></span>
              <span className="bg-secondary p-2 rounded-lg"><FaWhatsapp size={20} className="text-white" /></span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="John Carter" />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input type="email" className="w-full p-2 rounded border border-gray-300" placeholder="example@youremail.com" />
            </div>
            <div>
              <label className="block font-semibold">Phone</label>
              <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="123 - 456 - 7890" />
            </div>
            <div>
              <label className="block font-semibold">Subject</label>
              <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="Ex. Careers" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block font-semibold">Message</label>
            <textarea className="w-full p-2 rounded border border-gray-300 h-28" placeholder="Type your message here..."></textarea>
          </div>
          <button className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg w-full">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact