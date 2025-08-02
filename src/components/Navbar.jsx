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
        <div className="w-32 h-auto sm:w-50">
          <img src={logoImage} alt="CubeInfotech Logo" />
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none bg-orange-500 p-1 px-2 rounded text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {/* {isOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          />
        )} */}

        {/* Nav Links */}
        <ul
          // className={`flex flex-col md:flex-row md:items-center absolute md:static bg-white w-full md:w-auto top-full left-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
          //   isOpen ? "block" : "hidden md:flex"

          className={`w-[250px]  flex flex-col md:flex-row md:items-center absolute md:static bg-white md:w-auto top-full left-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"

            // className={`fixed top-0 left-0 h-full w-[250px] bg-white z-40 transform transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:space-x-6 md:w-auto md:h-auto md:transform-none ${
            //   isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"

            // className={`fixed top-0 left-0 h-full w-[250px] bg-white z-40 transform transition-transform duration-300 ease-in-out
            // md:static md:h-auto md:w-auto md:flex md:flex-row md:items-center md:space-x-6 md:bg-transparent md:transform-none ${
            // isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } `}
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
