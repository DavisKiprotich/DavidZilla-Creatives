'use client'
import React, { useRef } from 'react'
import { FaGithub, FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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
      <div className="w-full bg-gray-100 px-6 lg:px-10 pt-20" id='contact'>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-textBlue">Contact us</h2>
          <p className="mt-3 text-black">
          We’re just a message away! Reach out to us through any of the platforms below or send us a quick note about your project — 
          we’d love to hear what you have in mind and help bring your vision to reality.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex flex-wrap gap-3 mt-3">
              <a href='https://www.facebook.com/share/1KrqdHHdmV/' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaFacebook size={20} className="text-white hover:text-textBlue" /></a>
              <a href='' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaXTwitter size={20} className="text-white hover:text-textBlue" /></a>
              <a href='https://www.instagram.com/d_zillacreatives?igsh=Nm15aTl5MnVjZDIx' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaInstagram size={20} className="text-white hover:text-textBlue" /></a>
              <a href='https://www.linkedin.com/in/david-ushindi-353305261' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaLinkedin size={20} className="text-white hover:text-textBlue" /></a>
              <a href='https://wa.me/c/254791083661' target='_blank' rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg hover:bg-gray-100"><FaWhatsapp size={20} className="text-white hover:text-textBlue" /></a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form ref={form} onSubmit={sendEmail}  className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal">Name</label>
              <input name='from_name' type="text" className="w-full p-2 rounded border border-gray-300" placeholder="John Omusula" required/>
            </div>
            <div>
              <label className="block font-normal">Email</label>
              <input name='from_email' type="email" className="w-full p-2 rounded border border-gray-300" placeholder="example@youremail.com" required/>
            </div>
            <div>
              <label className="block font-normal">Phone</label>
              <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="123 - 456 - 7890" />
            </div>
            <div>
              <label className="block font-normal">Subject</label>
              <input type="text" name='from_title' className="w-full p-2 rounded border border-gray-300" placeholder="Ex. Careers" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block font-normal">Message</label>
            <textarea name='message' className="w-full p-2 rounded border border-gray-300 h-28" placeholder="Type your message here..." required></textarea>
          </div>
          <button type='submit' value='send' className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg w-full">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact