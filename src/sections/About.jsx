import React from "react";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";
import About3 from "../assets/about3.png";

export default function AboutWebDesign() {
  return (
    <div className="overflow-x-hidden">
      {/* Heading */}
      <div className="md:hidden relative flex flex-col items-center space-y-4 mt-12">
        <h2 className="text-[50px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          About Us
        </h2>
        <h2 className="text-3xl font-bold text-center top-3 text-[#1b1e37] relative z-10">
          About Our Web Design Services
        </h2>
      </div>
      <h1 className="text-[75px] font-bold text-[#d0d0ec] z-0 absolute top-180 left-7 select-none hidden md:block">
        About Us
      </h1>
      <h2 className="text-3xl md:text-2xl font-bold top-22 left-7 relative z-10 hidden sm:block">
        About Our Web Design Services
      </h2>
      <section className="bg-white px-6 py-10 md:py-24 text-black flex gap-3 ">
        <div className="">
          {/* Content */}
          <div className="space-y-4 text-lg md:text-base  md:w-[55rem] relative z-10 text-center md:text-left">
            <p>
              At Cube InfoTech we believe that the best website is the one that
              represents the products or services nicely and is engaging. We’ve
              been working for clients based in Ontario, Texas and various other
              parts of the world. Our website designers have covered almost
              every industry like Medical, Automobile, IT and real estate. We’ve
              provided businesses their apt space in the digital world. We aim
              to render our clients with result-driven, strategic and ROI driven
              solutions using innovative technologies.
            </p>
          </div>

          <div className="flex md:gap-3 flex-col md:flex-row flex-wrap">
            <div>
              <div className="md:max-w-md mt-3 text-center md:text-left text-lg md:text-base">
                <p>
                  At Cube InfoTech we believe that the best website is the one
                  that represents the products or services nicely and is
                  engaging. We’ve been working for clients based in Ontario,
                  Texas and various other parts of the world. Our website
                  designers have covered almost every industry like Medical,
                  Automobile, IT and
                </p>
              </div>

              {/* Card 1 */}
              <div className="flex-1 flex-col rounded-2xl overflow-hidden relative min-h-[280px] justify-end bg-black md:h-[245px] mt-7 md:w-[450px]">
                {/* Image */}
                <img
                  src={About1}
                  alt="Websites launched"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0  text-white p-6 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Websites launched</h3>
                    <p className="text-sm">
                      We’ve designed unique websites with creativity in various
                      niches for startups as well as enterprises.
                    </p>
                  </div>
                  <span className="text-2xl font-bold self-end">55+</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 flex-col rounded-2xl overflow-hidden relative min-h-[280px] justify-end bg-black md:h-[405px] mt-8  ">
              {/* Image */}
              <img
                src={About2}
                alt="Websites launched"
                className="w-full h-full object-cover absolute top-0 left-0"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0  text-white p-6 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">Websites launched</h3>
                  <p className="text-sm">
                    We’ve designed unique websites with creativity in various
                    niches for startups as well as enterprises.
                  </p>
                </div>
                <span className="text-2xl font-bold self-end">6+</span>
              </div>
            </div>
            {/* Only on Mobile Screen */}
            {/* Card 2 */}
            <div className="flex-1 flex-col rounded-2xl overflow-hidden relative min-h-[280px] justify-end bg-black md:h-[405px] mt-8 md:hidden ">
              {/* Image */}
              <img
                src={About2}
                alt="Websites launched"
                className="w-full h-full object-cover absolute top-0 left-0"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0  text-white p-6 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">Websites launched</h3>
                  <p className="text-sm">
                    We’ve designed unique websites with creativity in various
                    niches for startups as well as enterprises.
                  </p>
                </div>
                <span className="text-2xl font-bold self-end">700+</span>
              </div>
            </div>
            {/* Mobile Screen End */}
            
          </div>
        </div>

        {/* Card 3 */}
        <div className=" flex-1 flex-col rounded-2xl overflow-hidden relative min-h-[280px] justify-end bg-black md:h-[555px] hidden md:block">
          {/* Image */}
          <img
            src={About3}
            alt="Websites launched"
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0  text-white p-6 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">Websites launched</h3>
              <p className="text-sm">
                We’ve designed unique websites with creativity in various niches
                for startups as well as enterprises.
              </p>
            </div>
            <span className="text-2xl font-bold self-end">700+</span>
          </div>
        </div>
      </section>
    </div>
  );
}
