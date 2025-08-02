// import React from "react";
import hero2 from "../assets/hero2.png"
import heroSide1 from "../assets/heroSide1.png";
import heroSide2 from "../assets/heroSide2.png";
import heroSide3 from "../assets/heroSide3.png";
import heroSide4 from "../assets/heroSide4.png";
import heroSide5 from "../assets/heroSide5.png";

// its responcive
export default function HeroSection() {
  return (
    <section className="bg-[#1E2D78] text-white px-6 py-16 md:py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-end gap-12">
        {/* Left Text Content */}
        <div>
          {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6"> */}
          {/* Heading */}
        <div className="md:hidden relative flex flex-col items-center mb-3">
          <h2 className="opacity-18 text-[70px] font-bold text-[#d0d0ec] absolute top-[-36px] z-0 select-none text-center">
             Website Design
          </h2>
          <h2 className=" text-3xl font-bold relative z-10 text-center top-10">
            <span className="block text-white">Web Design <br /> Company in</span>
            <span className="block text-white">Toronto: Cube InfoTech</span>
          </h2>
        </div>

          <h3 className="text-3xl sm:text-4xl md:text-3xl font-bold leading-tight mb-6 hidden sm:block">

            <span className="block text-white">Web Design Company in</span>
            <span className="block text-white">Toronto: Cube InfoTech</span>
          </h3>
          <p className="text-lg md:text-xl text-slate-200 mb-6 hidden sm:block">
            Get an engaging and visually appealing website and connect your audience with a strategic approach.
            <br />
            Cube InfoTech is a web design company in Toronto known to build websites that converts website visitors into customers.
          </p>
          <div className="hidden sm:flex flex-col sm:flex-row gap-6 ">
            {/* <button className="bg-[#F4511E] hover:bg-[#e64711] transition-all duration-300 text-white px-6 py-3 text-lg rounded-xl shadow-md"> */}
            <button className="bg-[#F4511E] hover:bg-[#e64711] transition-all duration-300 text-white px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-xl shadow-md">
              See Our Work
            </button>
            <button className="bg-white text-[#F4511E] hover:bg-orange-100 transition-all duration-300 px-6 py-3 text-lg rounded-xl shadow-md">
              Contact Today!
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex justify-center">
          <img
            src={hero2}
            alt="Woman with Laptop on Cube InfoTech homepage"
            // className="relative z-10 w-[471.21px] h-[530px] top-[130px] left-[50px] "
            className="relative z-10 w-[160px] sm:w-[100px] md:w-[471px] h-auto sm:h-[250px] md:h-[530px] top-20 md:top-[88px] left-0 md:left-[50px]"

          />

          {/* Floating icons */}
          <img
            src={heroSide4}
            alt="Search"
            // className="absolute right-12 w-[50px] h-[50px] md:h-[75px] top-[50px] md:top-[100px] left-[250px] md:left-[510px] md:w-20 hover:scale-110 transition-transform duration-300"
            className="absolute w-[50px] md:w-[100px] top-[55px] md:top-[100px] right-[15%] md:left-[78%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide5}
            alt="Rocket Launch UI"
            // className="absolute bottom-4 right-0 w-[50px] h-[50px] md:h-[80px] top-[120px] md:top-[260px]  left-[255px] md:left-[550px] md:w-16 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] md:w-[100px] top-[120px] md:top-[260px] right-[7%] md:left-[85%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide3}
            alt="Web Development"
            // className="absolute right-1/4 w-[500px] h-[150px] top-[-20px] left-[330px] md:w-14 hover:scale-110 transition-transform duration-300"
            className="absolute w-[80px]  md:w-[160px] top-[-0px] md:top-[-40px] md:left-[45%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide1}
            alt="E-commerce Platform"
            // className="absolute h-[40px] md:h-[80px] top-[120px] md:top-[260px] left-[60px] md:left-[100px] w-[50px] md:w-20 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] md:w-[100px] top-[125px] md:top-[260px] left-[7%] md:left-[10%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide2}
            alt="3D Web Icon"
            // className="absolute w-[45px] h-[40px] md:h-[80px] top-[60px] md:top-[100px] left-[75px] md:left-[135px] md:w-18 hover:scale-110 transition-transform duration-300"
            className="absolute w-[45px] md:w-[100px] top-[57px] md:top-[100px] left-[18%] md:left-[18%] hover:scale-110 transition-transform duration-300"

          />
        </div>
        <p className="text-lg md:text-xl text-slate-200 mb-2 md:hidden text-center pt-18">
            Get an engaging and visually appealing website and connect your audience with a strategic approach.
            <br />
            Cube InfoTech is a web design company in Toronto known to build websites that converts website visitors into customers.
        </p>
         <div className=" flex gap-6 md:hidden justify-center ">
            {/* <button className="bg-[#F4511E] hover:bg-[#e64711] transition-all duration-300 text-white px-6 py-3 text-lg rounded-xl shadow-md"> */}
            <button className="bg-[#F4511E] hover:bg-[#e64711] transition-all duration-300 text-white px-3 text-lg rounded-full shadow-md">
              See Our Work
            </button>
            <button className="bg-white text-[#F4511E] hover:bg-orange-100 transition-all duration-300 px-3 py-2 text-lg rounded-full shadow-md">
              Contact Today!
            </button>
          </div>
      </div>
      {/* Background Watermark Text */}
      {/* <h2 className="absolute text-[8rem] md:text-[10rem] font-extrabold opacity-10 top-10 left-6 text-white leading-none pointer-events-none select-none hidden md:block"> */}
      <h2 className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[6rem] font-bold opacity-10 top-58 left-7 text-white leading-none pointer-events-none select-none hidden md:block">
        Website <br /> Design
      </h2>
    </section>
  );
}









