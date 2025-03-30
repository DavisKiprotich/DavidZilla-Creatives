'use client'
import React, { useRef } from 'react'
import { FaGithub, FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9532kns', 'template_m2upfdq', form.current, {
        publicKey: 'x-2tb3mgOArYyqdnb',
      })
      .then(
        () => {
          toast.success('Rocketed Out');
        },
        (error) => {
          toast.error(error);
        },
      );
      e.target.reset();
  };
  return (
      <div className="bg-gray-100 text-textBlue min-h-screen flex items-center justify-center p-6" id='contact'>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold hover:text-secondary">Contact us</h2>
          <p className="mt-3 text-black">
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra
            porttitor libero netus nulla tempor cont.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex flex-wrap gap-3 mt-3">
              <a className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaGithub size={20} className="text-white hover:text-textBlue" hr/></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaFacebook size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaXTwitter size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaInstagram size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaLinkedin size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaYoutube size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaWhatsapp size={20} className="text-white hover:text-textBlue" /></a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className=" bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal">Name</label>
              <input id='name' type="text"  className="w-full p-2 rounded border border-gray-300" placeholder="John Carter" name="from_name" required />
            </div>
            <div>
              <label className="block font-normal">Email</label>
              <input id='email' type="email" name="from_email" className="w-full p-2 rounded border border-gray-300" placeholder="example@youremail.com" />
            </div>
            <div>
              <label className="block font-normal">Phone</label>
              <input  type="number" className="w-full p-2 rounded border border-gray-300" placeholder="123 - 456 - 7890" />
            </div>
            <div>
              <label className="block font-normal">Subject</label>
              <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="Ex. Careers" />
            </div>
            <div className="mt-4">
              <label className="block font-normal" htmlFor="message">Your Message</label>
              <textarea id='message' name="message" className="w-full p-2 rounded border border-gray-300 h-28" id="message" placeholder="Hello, I would like to talk about..."></textarea>
            </div>
            <button type="submit" value="Send" className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg w-full">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact