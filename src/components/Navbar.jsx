import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 lg:px-16 py-4 shadow-md">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Taxi</span>
          <span className="text-white">Rent</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/package" className="hover:text-blue-400">Holiday Package</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Right Section */}
          <a
            href="https://wa.me/917057540811"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="font-semibold">7057540811</span>
          </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-4 text-center">
          
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">About</Link>
          <Link to="/package" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Holiday Package</Link>
          <Link to="/attach" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Attach Taxi</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Contact</Link>

          {/* Mobile WhatsApp */}
          <div className="flex justify-center items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg mt-3">
            <FaWhatsapp className="text-green-400 text-xl" />
            <span>7057540811</span>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;