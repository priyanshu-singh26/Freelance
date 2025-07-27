import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Wordpress from "../assets/wordpress2.png"
import Shopify from "../assets/shopify.png"
import Nodejs from "../assets/nodejs.png"
import Reactjs from "../assets/reactjs.png"

const techLogos = [
  { name: "WordPress", src: Wordpress, alt: "WordPress Logo" },
  { name: "Shopify", src: Shopify, alt: "Shopify Logo" },
  { name: "Node.js", src: Nodejs, alt: "Node.js Logo" },
  { name: "React", src: Reactjs, alt: "React Logo" },
];

export default function AdsTechnologiesSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? techLogos.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
  };

  return (
    <section className="bg-[#fbfaf9] py-6 px-4 rounded-xl shadow-md max-w-6xl mx-auto">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center gap-10">
        <h2 className="text-2xl font-bold text-[#162eb5]">Technologies</h2>
        {techLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden items-center text-center gap-4">
        <h2 className="text-xl font-bold text-[#162eb5]">Technologies</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="absolute left-5 bg-red-500 text-white p-2 rounded"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <img
            src={techLogos[index].src}
            alt={techLogos[index].alt}
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={next}
            className="absolute right-5 bg-red-500 text-white p-2 rounded"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
