import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Client from "../assets/client.jpg"
import Client6 from "../assets/client6.jpg"
import Client4 from "../assets/client4.jpg"
import Client3 from "../assets/client3.jpg"

const testimonials = [
  {
    name: "Serhiy Hipskyy",
    title: "CEO Universal",
    image: Client,
    rating: 5,
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
  },
  {
    name: "Justus Menke",
    title: "CEO Eronaman",
    image: Client6,
    rating: 5,
    text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Britain Eriksen",
    title: "CEO Universal",
    image: Client4,
    rating: 5,
    text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    name: "Britain Eriksen",
    title: "CEO Universal",
    image: Client3,
    rating: 5,
    text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

export default function OurClientTestimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#2433a8] py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center relative">

        {/* Mine */}
        {/* Mobile */}
        <div className="relative flex flex-col items-center space-y-4 md:hidden">
        <h2 className=" text-[35px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          What our client says
        </h2>
        <h2 className="text-xl font-bold text-[#1b1e37] relative z-10">Some Client Appreciations</h2>
        </div>
        {/* Moile end */}
        <h1 className="text-6xl md:text-[72px]] font-bold text-[#d0d0ec] absolute top-[-40px] left-1/2 -translate-x-1/2 z-0 select-none hidden md:block">
          What our client says
        </h1>
        <h2 className="text-3xl md:text-2xl sm:text-3xl top-[9px] font-bold text-[#1b1e37] relative z-10 hidden sm:block">
          Some Client Appreciations
        </h2>
        {/* Mine end */}
        {/* <h2 className="text-6xl md:text-[72px] text-[#d0d0ec] font-bold md:font-extrabold leading-none z-0 ">
          What our client says
        </h2>
        <h2 className="text-3xl md:text-2xl text-[#1b1e37] md:-mt-8 font-bold z-10">Some Client Appreciations</h2> */}

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white text-black rounded-md p-6 relative shadow-md">
              <div className="absolute -top-6 left-6 bg-black text-white p-2 rounded-full">
                <Quote size={18} />
              </div>
              <div className="flex mb-2 text-red-500 space-x-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-10 flex flex-col items-center">
          <div className="bg-white text-black rounded-md p-6 relative shadow-md w-full max-w-xs">
            <div className="absolute -top-6 left-6 bg-black text-white p-2 rounded-full">
              <Quote size={18} />
            </div>
            <div className="flex mb-2 text-red-500 space-x-1">
              {Array.from({ length: testimonials[index].rating }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-6">{testimonials[index].text}</p>
            <div className="flex items-center gap-3 pt-4 border-t">
              <img src={testimonials[index].image} alt={testimonials[index].name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">{testimonials[index].name}</p>
                <p className="text-xs text-gray-500">{testimonials[index].title}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button onClick={handlePrev} className="bg-white text-black p-2 rounded hover:bg-gray-200">
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
