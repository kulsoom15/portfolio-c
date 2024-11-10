import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-lg px-6">
        <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <div className="flex gap-4 items-center text-gray-300 mb-4">
          <AiOutlineMail size={24} />
          <span>xyz@gmail.com</span>
        </div>
        <div className="flex gap-4 items-center text-gray-300 mb-12">
          <BsTelephone size={24} />
          <span>(031) 000-0000</span>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 h-32"></textarea>
          </div>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

