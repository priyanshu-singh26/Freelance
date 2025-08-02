import logoImage from "../assets/logo.png";

import { FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-10">
      <div className="px-4 sm:px-6 md:px-0 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-6">
        {/* Column 1 - Logo & Description */}
        <div>
          <img
            src={logoImage} // replace with your logo path
            alt="Cube InfoTech Logo"
            className="h-10 mb-5"
          />
          <p className="text-gray-600 text-sm mb-5">
            Ewebot have much planned for the future, working with great clients and continued software development.
          </p>
          <div className="flex gap-3 text-gray-600 text-lg">
            <FaTwitter />
            <FaFacebookF />
            <FaGooglePlusG />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Column 2 - Contact Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MdEmail className="text-red-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-800 font-medium">9024225444</p>
              <a href="mailto:info@digitalera.com" className="text-sm text-gray-600 hover:text-blue-600">
                info@digitalera.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLocationDot className="text-red-500 text-xl mt-1" />
            <div className="text-sm text-gray-600">
              <p>27 Division St, New York, NY</p>
              <p>10002, United States</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Services */}
        <div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#">SEO Marketing</a></li>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">Pay Per Click</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Audit</a></li>
          </ul>
        </div>

        {/* Column 4 - Links */}
        <div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#">Our Product</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">What We Do?</a></li>
          </ul>
        </div>

        {/* Column 5 - Links */}
        <div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Main Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Our Cases</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-900 text-white text-center text-sm py-1.5">
        © 2025 — All Rights Reserved.
      </div>
    </footer>
  );
}
