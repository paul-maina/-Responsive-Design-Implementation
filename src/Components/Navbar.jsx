import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-serif w-full px-4 py-6 relative">
      {/* ✅ Fixed mobile menu toggle button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-40 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-6 flex flex-col items-center gap-6 text-sm font-medium">
          <a href="#start" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <img src="https://i.imgur.com/D3NwETA.png" alt="Telix Logo" className="h-10 w-auto" />
          <a href="#testimonials" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#help" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Help</a>
          <a href="#contact" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* ✅ Original desktop layout (unchanged) */}
      <div className="max-w-5xl mx-auto hidden md:flex flex-wrap justify-center md:justify-around items-center gap-4 md:gap-16">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
          <a href="#start" className="hover:text-gray-500 transition">Home</a>
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#services" className="hover:text-gray-500 transition">Services</a>
        </div>
        <div className="flex justify-center">
          <img src="https://i.imgur.com/D3NwETA.png" alt="Telix Logo" className="h-10 w-auto" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
          <a href="#testimonials" className="hover:text-gray-500 transition">Testimonials</a>
          <a href="#help" className="hover:text-gray-500 transition">Help</a>
          <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
