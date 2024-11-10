"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">LOGO</Link>
        <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-white md:hidden">
          {navbarOpen ? "✕" : "☰"}
        </button>
        <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${navbarOpen ? "block" : "hidden"} md:block`}>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

     
