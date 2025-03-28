import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden flex items-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="#Projects" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Projects
          </a>
          <a href="#Contact" className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>

  )
}

export default Header;
