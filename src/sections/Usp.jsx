import React from "react";
import usbCentral from "../assets/usbCentral.png"
import usbExperince from "../assets/usbExperince.png"
import usbDesign from "../assets/usbDesign.png"
import usbApproach from "../assets/usbApproach.png"
import usbPricing from "../assets/usbPricing.png"
import usbDelivery from "../assets/usbDelivery.png"
import usbMaintainc from "../assets/usbMaintainc.png"


export default function USPSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative z-10">
            Why We are The Leading Website Design Agency in Toronto
          </h2>
          <span className="absolute -top-14 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-bold text-slate-300 select-none z-0">
            USP
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center text-center">
              <img src={usbExperince} width={48} height={48} alt="Experience" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Experience</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={usbDesign} width={48} height={48} alt="Top Noch Design" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Top Noch Design</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div> 
            <div className="flex flex-col items-center text-center">
              <img src={usbApproach} width={48} height={48} alt="Approach" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Approach</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Center img */}
          <div className="mx-auto">
            <img
              src={usbCentral}
              width={400}
              height={400}
              alt="Central Illustration"
              className="mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center text-center">
              <img src={usbPricing} width={48} height={48} alt="Pricing" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Pricing</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={usbDelivery} width={48} height={48} alt="Delivery" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Delivery</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={usbMaintainc} width={48} height={48} alt="Maintaince" />
              <h3 className="text-xl font-bold text-blue-800 mt-4">Maintaince</h3>
              <p className="text-sm text-gray-700">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
