import React, { useEffect, useState } from "react";
import Amazon from "../assets/amazon.png";
import Paytm from "../assets/paytm.png";
import Netflix from "../assets/netflix.png";
import Genpect from "../assets/genpect.png";


export default function Adds() {
  const logos = [
    {
      name: "../assets/amazon.png",
      src: Netflix,
      alt: "Netflix Logo",
    },
    {
      name: "Amazon",
      src: Amazon,
      alt: "Amazon Logo",
    },
    {
      name: "Search Engine Journal",
      src: Paytm,
      alt: "Paytm Logo",
    },
    {
      name: "Entrepreneur",
      src: Genpect,
      alt: " Genpect Logo",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [logos.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % logos.length);
  };

  return (
    <section className="bg-[#f5f6fc] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-10">
        <h2 className="text-2xl font-bold text-[#162eb5]">Clients</h2>
        {logos.map((logo) => (
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
        <div className="md:hidden bg-white shadow-md rounded-xl p-4 flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-blue-800">Clients</h2>
          <div className="relative w-full flex items-center justify-center">
            <button
              aria-label="Previous logo"
              onClick={prevSlide}
              className="absolute left-0 text-white bg-red-500 rounded w-6 h-6 flex items-center justify-center"
            >
              ‹
            </button>
            <img
              src={logos[current].src}
              alt={logos[current].alt}
              className="h-10 w-auto mx-4"
            />
            <button
              aria-label="Next logo"
              onClick={nextSlide}
              className="absolute right-0 text-white bg-red-500 rounded w-6 h-6 flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
