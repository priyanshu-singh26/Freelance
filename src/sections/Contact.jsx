import React  from "react";
import Cube2 from "../assets/cube2.png"



export default function ContactFormSection() {
  return (
    <section
      className="max-w-7xl mx-auto bg-gradient-to-r from-green-600 to-green-400 text-white py-10 px-4 md:px-16 relative overflow-hidden mb-16"
    //   style={{ backgroundImage: 'url(/images/green-grid.png)', backgroundSize: 'cover' }}
    >
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10 z-10 relative">
        {/* Left Content */}
        <div className="flex-1 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
            To get information, latest news and other interesting offers about
          </h2>

          <form className="space-y-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b border-white pb-1">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
              <div className="border-b border-white pb-1">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
              <div className="border-b border-white pb-1">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent outline-none placeholder-white"
                />
              </div>
              <div className="border-b border-white pb-1">
                <input
                  type="text"
                  placeholder="Website*"
                  className="w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
            </div>
            <div className="border-b border-white pb-1">
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full bg-transparent outline-none placeholder-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 relative z-10 hidden md:block md:translate-y-1/2 md:-translate-x-1/4">
          <img
            src={Cube2}
            alt="Box Puzzle"
            className="w-64 md:w-80 relative z-10"
          />
        </div>
      </div>

      {/* Mobile Image Positioning */}
      <div className="md:hidden absolute bottom-3 right-20 w-40 h-auto z-10 translate-x-1/2 translate-y-1/2">
        <img
          src={Cube2}
          alt="Box Puzzle"
          className="w-full"
        />
      </div>
    </section>
  );
}





