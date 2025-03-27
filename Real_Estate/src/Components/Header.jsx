import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/header_img.png')",
        backgroundSize: "cover", // Ensures the image covers the full div
        backgroundPosition: "center", // Centers the image properly
        backgroundRepeat: "no-repeat", // Prevents repetition
        height: "100vh", // Ensures full viewport height
        width: "100%", // Full width
      }}
      id="Header"
    >
      <Navbar />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-bold">Explore homes that fit your dreams</h2>
        <div className="mt-4">
          <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2">Projects</a>
          <a href="#" className="px-4 py-2 bg-green-500 text-white rounded-lg mx-2">Contact Us</a>
        </div>
      </div>
    </div>


  )
}

export default Header;
