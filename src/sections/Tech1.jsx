import React from "react";
import Tech1 from "../assets/tech1.png"

export default function TechPartnersSection() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Cube InfoTech is Partnered with <br className="hidden md:block" /> Leading Brands
          </h2>
          <p className="text-gray-700 mb-5 overflow-hidden">
            We’re partnered with leading companies to make our website designing journey Easy,
            Effective and Everlasting.
          </p>
          <p className="text-gray-700 mb-4 md:hidden overflow-hidden">
            Also, we’re up to date of what’s going on in the market as well as what’s about to come
            up as an update or upgrade.
          </p>
          <p className="text-gray-700 mb-4 md:hidden">
            With an understanding of what mistakes business owners are likely to make, you’ll find
            us all ready there with a solution.
          </p>
        </div>

        {/* Logos as Single Image */}
        <div className="flex justify-center">
          <img
            src={Tech1}
            alt="Partner Logos"
            // className="w-2xl max-w-md md:max-2xl object-contain transition duration-300"
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Below Logos on Mobile */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-gray-700 mb-4">
            Also, we’re up to date of what’s going on in the market as well as what’s about to come
            up as an update or upgrade.
          </p>
          <p className="text-gray-700">
            With an understanding of what mistakes business owners are likely to make, you’ll find
            us all ready there with a solution.
          </p>
        </div>
      </div>
    </section>
  );
}
