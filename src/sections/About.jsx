import React from "react";
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"
import About3 from "../assets/about3.png"

export default function AboutWebDesign() {
  return (
    <section className="bg-white px-6 py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="md:hidden relative flex flex-col items-center space-y-4 mb-3">
        <h2 className="text-[40px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          About Us
        </h2>
        <h2 className="text-xl font-bold text-[#1b1e37] relative z-10">About Our Web Design Services</h2>
      </div>
        <h1 className="text-[72px] font-bold text-[#d0d0ec] z-0 absolute top-211 left-7 select-none hidden md:block">
          About Us
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold mb-6 relative z-10 hidden sm:block">About Our Web Design Services</h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-lg md:text-base">
          <p>
            At Cube InfoTech we believe that the best website is the one that represents the products or services nicely and is engaging. We’ve been working for clients based in Ontario, Texas and various other parts of the world. Our website designers have covered almost every industry like Medical, Automobile, IT and real estate. We’ve provided businesses their apt space in the digital world. We aim to render our clients with result-driven, strategic and ROI driven solutions using innovative technologies.
          </p>
          <p>
            Every day, we endeavor to encourage you in augmenting your brand’s online visibility; while enhancing engagement & reach with your target audience, and finally getting the sales and conversions you seek. From creating your online presence to making it viral, we are your go-to service provider.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden bg-black relative group hover:shadow-xl transition-shadow">
            <img src={About1} alt="Small team of experts" className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
              <div>
                <h3 className="text-xl font-semibold">Small team of experts</h3>
                <p className="text-sm mt-2">We have in-house team of 55+ specialists, many with around a decade of experience.</p>
              </div>
              <span className="text-2xl font-bold self-end">55+</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" rounded-2xl overflow-hidden bg-black relative group hover:shadow-xl transition-shadow">
            <img src={About2} alt="Competent experience" className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
              <div>
                <h3 className="text-xl font-semibold">Competent experience</h3>
                <p className="text-sm mt-2">Cube InfoTech started around 6 years back with a team of 4 and now we are 55+.</p>
              </div>
              <span className="text-2xl font-bold self-end">6+</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden bg-black relative group hover:shadow-xl transition-shadow">
            <img src={About3} alt="Websites launched" className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
              <div>
                <h3 className="text-xl font-semibold">Websites launched</h3>
                <p className="text-sm mt-2">We’ve designed unique websites with creativity in various niches for startups as well as enterprises.</p>
              </div>
              <span className="text-2xl font-bold self-end">700+</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background Watermark Text */}
      {/* <h2 className="absolute text-[5rem] md:text-[5rem] font-black opacity-10 top-211 left-7 text-red-600 leading-none pointer-events-none select-none hidden md:block">
        About Us
      </h2> */}

      {/* <div className="md:hidden relative flex flex-col items-center space-y-4">
        <h2 className="text-[40px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          Our Work
        </h2>
        <h2 className="text-xl font-bold text-[#1b1e37] relative z-10">Case Studies</h2>
      </div>   */}
    </section>
  );
}
