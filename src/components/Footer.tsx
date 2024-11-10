import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo & Description */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">LOGO</h2>
            <p className="mt-2 text-gray-400">
              Creating impactful web solutions with a touch of creativity and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-purple-400">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-purple-400">Follow Me</h3>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center lg:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kulsoom Shahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



