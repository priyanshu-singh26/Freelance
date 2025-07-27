import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OurWork1 from "../assets/ourwork1.png"
import OurWork2 from "../assets/ourwork2.png"
import OurWork3 from "../assets/ourwork3.png"
import OurWork4 from "../assets/ourwork4.png"
import OurWork5 from "../assets/ourwork5.png"
import OurWork6 from "../assets/ourwork6.png"

const images = [ OurWork1,OurWork2,OurWork3,OurWork4,OurWork5,OurWork6 ];

export default function OurCaseStudies() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 relative">
        <h1 className="text-[72px] font-bold text-[#d0d0ec] absolute top-[-50px] left-1/2 -translate-x-1/2 z-0 select-none hidden md:block">
          Our Work
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1e37] relative z-10 hidden sm:block">
          Case Studies
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-sm sm:text-base hidden sm:block">
          For our clients, we build result-oriented websites: We’ve built websites from scratch that
          are capable to compete the market leaders. We’ve redesigned the outdated and low performing
          websites and implement CRO strategy to improve the outcome. Cube InfoTech is a 6 years old
          website design company in Toronto that values clients’ business and their hard-earned money
          and creates matchless websites. Please take a look at some of our case studies and
          understand why our clients appreciate our efforts.
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">
            <img
              src={src}
              alt={`Case Study ${i + 1}`}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Mobile carousel view */}
      <div className="md:hidden relative flex flex-col items-center space-y-4">
        <h2 className="text-[40px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          Our Work
        </h2>
        <h2 className="text-xl font-bold text-[#1b1e37] relative z-10">Case Studies</h2>

        <div className="flex items-center justify-between w-full px-6 gap-6">    
          <button
            onClick={handlePrev}
            className="bg-red-500 text-white p-2 rounded"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="w-11/12">
            <img
              src={images[current]}
              alt={`Case Study ${current + 1}`}
              className="rounded-xl w-full object-cover transition duration-300"
              loading="lazy"
            />
          </div>

          <button
            onClick={handleNext}
            className="bg-red-500 text-white p-2 rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#f1592a] text-white text-lg font-semibold px-6 py-3 rounded-xl hover:bg-[#d5481e] transition">
          View more
        </button>
      </div>
    </section>
  );
}
