import React from 'react';

function Conclusion() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-10 max-w-3xl m-auto">
      
      {/* Telix Footer Info */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow w-full md:w-1/2">
        <h1 className="text-xl font-bold text-[#003333] mb-4">Telix</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-[#1f2d2b]">
          <ul className="space-y-1">
            <li>About</li>
            <li>Services</li>
            <li>Claims</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
          </ul>
          <ul className="space-y-1">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <p className="text-xs text-gray-400 mt-6">© 2025 Telix Insurance. All rights reserved.</p>
      </div>

      {/* Telix CTA Card */}
      <div className="bg-[#003333] text-white rounded-2xl p-8 w-full md:w-1/2 relative overflow-hidden">
        {/* Optional illustration/emoji placeholder */}
        <div className="absolute top-4 right-4 text-2xl">🌼🌸</div>
        <h2 className="text-2xl font-bold mb-4 leading-snug">
          Find Protection,<br />
          Confidence,<br />
          and Peace of Mind.
        </h2>
        <p className="mb-4 text-sm text-white/80">Your journey is safer with Telix.</p>
        <button className="bg-white text-[#003333] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}

export default Conclusion;
