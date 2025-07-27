import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logoImage from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Logo and Description */}
        <div>
          <img
            src={logoImage}
            alt="Cube Infotech Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm">
            Ewebot have much planned for the future, working with great clients and
            continued software development.
          </p>
          <div className="flex items-center gap-4 mt-4 text-xl text-gray-600">
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaGooglePlusG className="hover:text-red-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <img
              src="/images/email-icon.png"
              alt="Email"
              className="w-6 h-6"
            />
            <div>
              <p className="text-sm font-medium">9024225444</p>
              <p className="text-sm">info@digitalera.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="/images/location-icon.png"
              alt="Location"
              className="w-6 h-6"
            />
            <div>
              <p className="text-sm">
                27 Division St, New York, NY 10002, United States
              </p>
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="text-sm">
          <p className="font-medium mb-2">SEO Services</p>
          <ul className="space-y-1">
            <li>SEO Marketing</li>
            <li>SEO Services</li>
            <li>Pay Per Click</li>
            <li>Social Media</li>
            <li>SEO</li>
            <li>Audit</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="text-sm">
          <ul className="space-y-1">
            {/* <li className="font-medium">Our Product</li>
            <li>Documentation</li>
            <li>Our Services</li>
            <li>Company</li>
            <li>What We Do?</li> */}
            <li className="font-medium mt-4">Home</li>
            <li>About Us</li>
            <li>Main Services</li>
            <li>Pricing</li>
            <li>Our Cases</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-900 text-white text-center py-4 text-sm">
        © 2025 — All Rights Reserved.
      </div>
    </footer>
  );
}
