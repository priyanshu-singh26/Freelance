import React from "react";
import Tech2 from "../assets/tech2.png"

export default function EcommerceSection() {
  return (
    <section className="bg-white px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <p className="text-gray-800 mb-6 text-sm sm:text-base hidden sm:block">
            Ecommerce is our specialization. We’re not just an ecommerce website development
            company in Toronto, however, we provide complete A to Z e-commerce solution:
          </p>
          <ul className="list-disc pl-5 text-gray-800 space-y-2 text-sm sm:text-base">
            <li>Hosting</li>
            <li>Dropshipping</li>
            <li>Digital Marketing</li>
            <li>eCommerce Audit</li>
            <li>Customer Support</li>
            <li>Order Management</li>
            <li>Website Management</li>
            <li>eCommerce Consultation</li>
            <li>Marketplace Management</li>
            <li>Ecommerce Website Designing</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tech2}
            alt="Ecommerce Services Overview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
