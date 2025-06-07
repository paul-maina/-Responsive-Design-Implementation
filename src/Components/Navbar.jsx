import React from "react";

function Navbar() {
  return (
    <nav className="font-serif w-full px-4 py-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-around items-center gap-4 md:gap-16">

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
          <a href="#start" className="hover:text-gray-500 transition">Home</a>
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#services" className="hover:text-gray-500 transition">Services</a>
        </div>

        <div className="flex justify-center">
          <img src="telix_logo.png" alt="Telix Logo" className="h-10 w-auto" />
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
