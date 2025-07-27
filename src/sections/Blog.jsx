import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Blog1 from "../assets/blog1.jpeg"
import Blog2 from "../assets/blog2.jpeg"
import Blog3 from "../assets/blog3.jpeg"
import Blog4 from "../assets/blog4.jpeg"


const blogs = [
  {
    date: "19 Feb, 2022",
    title: "UI/UX design Tips",
    content: "Promotion World has once placed PageTraffic among the top.",
    link: "#",
    image: Blog1,
    color: "red",
  },
  {
    date: "09 Apr, 2022",
    title: "Improve your UX/UI",
    content: "Promotion World has once placed PageTraffic among the top.",
    link: "#",
    image: Blog2,
    color: "green",
  },
  {
    date: "25 Jan, 2022",
    title: "Meta Technology.",
    content: "Promotion World has once placed PageTraffic among the top.",
    link: "#",
    image: Blog3,
    color: "green",
  },
  {
    date: "13 Nov, 2022",
    title: "PageTraffic Ranks",
    content: "Promotion World has once placed PageTraffic among the top.",
    link: "#",
    image: Blog4,
    color: "red",
  },
];


export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollRight = () => {
    if (currentIndex < blogs.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-[80px] font-extrabold text-[#c7cbe9] leading-none -mb-6">
          Blogs
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#091434] z-10 relative">
          See Our Posts
        </h2>
      </div>

      {/* Scroll Buttons Desktop */}
      <div className="hidden md:flex justify-end mb-4 pr-4 gap-2">
        <button
          onClick={scrollLeft}
          className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Blog Grid or Slider */}
      <div className={`grid md:grid-cols-2 gap-6 ${isMobile ? "overflow-hidden" : ""}`}>
        {blogs.map((blog, idx) => {
          const show = !isMobile || idx === currentIndex;
          return (
            <div
              key={idx}
              className={`flex border-b-4 rounded-xl overflow-hidden p-2 shadow-md transition-shadow duration-300
                ${
                  blog.color === "green"
                    ? "border-green-300 hover:shadow-green-200"
                    : "border-red-300 hover:shadow-red-200"
                }
                ${show ? "flex" : "hidden"}
              `}
            >
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-1/3 h-auto object-cover rounded-lg border-b-4"
              />
              <div className="pl-4 flex flex-col justify-center">
                <p className="text-xs text-gray-500 mb-1">{blog.date}/ By Admin</p>
                <h3 className="text-lg font-semibold text-[#091434] mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{blog.content}</p>
                <a
                  href={blog.link}
                  className={`text-sm font-medium flex items-center space-x-1 hover:underline ${
                    blog.color === "green" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <span>Read more</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Buttons Mobile */}
      {isMobile && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={scrollLeft}
            className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#f0422f] hover:bg-[#d23323] text-white font-semibold py-2 px-6 rounded-xl shadow-md">
          View more
        </button>
      </div>
    </section>
  );
}
