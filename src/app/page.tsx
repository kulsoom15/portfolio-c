import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <Hero />
        <AboutSection />
        <ServicesSection/>
        <ContactSection/>
        
      </div>
      <Footer />
    </main>
  );
}
