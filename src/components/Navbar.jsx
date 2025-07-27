import { useState } from "react";
import logoImage from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="container mx-auto flex items-center justify-between p-4"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="CubeInfotech Logo" />
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center absolute md:static bg-white w-full md:w-auto top-full left-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <a
              href="#"
              className="text-blue-700 border-b-2 border-blue-700 pb-1 md:pb-0"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 block mt-3 md:mt-0">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 block mt-3 md:mt-0">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 block mt-3 md:mt-0">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 block mt-3 md:mt-0">
              Blogs
            </a>
          </li>
          <li className="mt-4 md:mt-0">
            <a
              href="#"
              className="inline-block bg-orange-500 text-white px-5 py-2 rounded-b-2xl rounded-t-2xl font-semibold hover:bg-orange-600 transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
