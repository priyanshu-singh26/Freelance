// import React from "react";
import hero2 from "../assets/hero2.png"
import heroSide1 from "../assets/heroSide1.png";
import heroSide2 from "../assets/heroSide2.png";
import heroSide3 from "../assets/heroSide3.png";
import heroSide4 from "../assets/heroSide4.png";
import heroSide5 from "../assets/heroSide5.png";

export default function HeroSection() {
  return (
    <section className="bg-[#1E2D78] text-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-end gap-12">
        {/* Left Text Content */}
        <div>
          {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6"> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">

            <span className="block text-white">Web Design Company in</span>
            <span className="block text-white">Toronto: Cube InfoTech</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-6">
            Get an engaging and visually appealing website and connect your audience with a strategic approach.
            <br />
            Cube InfoTech is a web design company in Toronto known to build websites that converts website visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
            className="relative z-10 w-[250px] sm:w-[350px] md:w-[471px] h-auto sm:h-[450px] md:h-[530px] top-0 md:top-[60px] left-0 md:left-[50px]"

          />

          {/* Floating icons */}
          <img
            src={heroSide4}
            alt="Search"
            // className="absolute right-12 w-[103.1px] h-[75px] top-[100px] left-[510px] md:w-20 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20px] left-[65%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide5}
            alt="Rocket Launch UI"
            // className="absolute bottom-4 right-0 w-[122.5px] h-[80px] top-[260px] left-[550px] md:w-16 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20px] left-[65%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide3}
            alt="Web Development"
            // className="absolute right-1/4 w-[500px] h-[150px] top-[-20px] left-[330px] md:w-14 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20px] left-[65%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide1}
            alt="E-commerce Platform"
            // className="absolute w-[122.5px] h-[80px] top-[260px] left-[100px] md:w-20 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20px] left-[65%] hover:scale-110 transition-transform duration-300"

          />
          <img
            src={heroSide2}
            alt="3D Web Icon"
            // className="absolute w-[122.5px] h-[80px] top-[100px] left-[135px] md:w-18 hover:scale-110 transition-transform duration-300"
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20px] left-[65%] hover:scale-110 transition-transform duration-300"

          />
        </div>
      </div>
      {/* Background Watermark Text */}
      {/* <h2 className="absolute text-[8rem] md:text-[10rem] font-extrabold opacity-10 top-10 left-6 text-white leading-none pointer-events-none select-none hidden md:block"> */}
      <h2 className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold opacity-10 top-10 left-6 text-white leading-none pointer-events-none select-none hidden md:block">
        Website <br /> Design
      </h2>
    </section>
  );
}


// import React from "react";
// import hero2 from "../assets/hero2.png";
// import heroSide1 from "../assets/heroSide1.png";
// import heroSide2 from "../assets/heroSide2.png";
// import heroSide3 from "../assets/heroSide3.png";
// import heroSide4 from "../assets/heroSide4.png";
// import heroSide5 from "../assets/heroSide5.png";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-[#1E2D78] text-white px-6 py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
//         {/* Left Text Content */}
//         <div>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
//             <span className="block">Web Design Company in</span>
//             <span className="block">Toronto: Cube InfoTech</span>
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-6">
//             Get an engaging and visually appealing website and connect your audience with a strategic approach. <br />
//             Cube InfoTech is a web design company in Toronto known to build websites that convert visitors into customers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#F4511E] hover:bg-[#e64711] transition-all duration-300 text-white px-6 py-3 text-base sm:text-lg rounded-xl shadow-md">
//               See Our Work
//             </button>
//             <button className="bg-white text-[#F4511E] hover:bg-orange-100 transition-all duration-300 px-6 py-3 text-base sm:text-lg rounded-xl shadow-md">
//               Contact Today!
//             </button>
//           </div>
//         </div>

//         {/* Right Image and Icons */}
//         <div className="relative w-full flex justify-center">
//           {/* Main Hero Image */}
//           <img
//             src={hero2}
//             alt="Woman with Laptop"
//             className="top-50 w-[250px] sm:w-[350px] md:w-[470px] h-auto relative z-10"
//           />

//           {/* Floating Icons */}
//           <img
//             src={heroSide4}
//             alt="Search Icon"
//             className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-0 left-[65%] md:left-[68%] hover:scale-110 transition-transform duration-300"
//           />
//           <img
//             src={heroSide5}
//             alt="Rocket Launch UI"
//             className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[50%] left-[75%] hover:scale-110 transition-transform duration-300"
//           />
//           <img
//             src={heroSide3}
//             alt="Web Development"
//             className="absolute w-[120px] sm:w-[180px] md:w-[250px] top-[-40px] left-[50%] hover:scale-110 transition-transform duration-300"
//           />
//           <img
//             src={heroSide1}
//             alt="E-commerce Platform"
//             className="absolute w-[60px] sm:w-[80px] md:w-[100px] bottom-[10%] left-[10%] hover:scale-110 transition-transform duration-300"
//           />
//           <img
//             src={heroSide2}
//             alt="3D Web Icon"
//             className="absolute w-[60px] sm:w-[80px] md:w-[100px] top-[20%] left-[15%] hover:scale-110 transition-transform duration-300"
//           />
//         </div>
//       </div>

//       {/* Watermark Background Text */}
//       <h2 className="absolute hidden md:block text-[5rem] lg:text-[8rem] xl:text-[10rem] font-extrabold opacity-10 top-4 left-6 text-white leading-none pointer-events-none select-none z-0">
//         Website <br /> Design
//       </h2>
//     </section>
//   );
// }
