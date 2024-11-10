"use client";
import React from "react";
import styles from "../style/ServicesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCode } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
 
const ServicesSection = () => {
  const services = [
    {
      icon: faPaintBrush,
      title: "Mockup Designing",
      description:
        "I possess strong mockup designing skills, utilizing Figma as my primary tool to create visually appealing and functional mockups.",
    },
    {
      icon: faConnectdevelop,
      title: "UI Development",
      description:
        "I have expertise in HTML, CSS, SCSS, Bootstrap, and JavaScript, crafting responsive user interfaces that ensure optimal user experience.",
    },
    {
      icon: faCode,
      title: "Frontend Development",
      description:
        "I specialize in Next.js, React, Tailwind CSS, and JavaScript, with a focus on mobile responsiveness and cross-browser compatibility.",
    },
  ];

  return (
    <section className="py-16 bg-dark text-white" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400">Services</h2>
        <p className="text-gray-300 mt-4 mb-12">What services I provide</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={service.icon} size="2x" className="text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;