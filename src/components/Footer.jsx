import React from "react";
import { Link } from "react-router-dom";

// lucide icons (UI)
import { Phone, Mail, MapPin, Car } from "lucide-react";

// social icons (react-icons)
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">AutoTaxi</span>
          </Link>

          <p className="leading-relaxed my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in.
          </p>

          <div className="flex gap-4 mt-2 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/cars" className="hover:underline">Our Cars</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="text-blue-400 w-5 h-5" />
              +91 7057540811
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-blue-400 w-5 h-5" />
              info@google.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-blue-400 w-5 h-5" />
              Amravati, India
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} AutoTaxi. All rights reserved
        </p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;