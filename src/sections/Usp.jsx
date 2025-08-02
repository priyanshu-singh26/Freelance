import React from "react";
import usbCentral from "../assets/usbCentral.png";
import usbExperince from "../assets/usbExperince.png";
import usbDesign from "../assets/usbDesign.png";
import usbApproach from "../assets/usbApproach.png";
import usbPricing from "../assets/usbPricing.png";
import usbDelivery from "../assets/usbDelivery.png";
import usbMaintainc from "../assets/usbMaintainc.png";

export default function USPSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative mb-12">
          <h2 className="text-3xl md:text-2xl font-bold relative z-10">
            Why We are The Leading Website Design Agency in Toronto
          </h2>
          <span className="absolute -top-10 md:-top-15 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-bold text-slate-300 select-none z-0">
            USP
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* <div className="flex justify-center items-start gap-4 max-w-xl mx-auto"> */}
            <div className="flex flex-row items-center justify-center  text-right md:justify-center gap-4 max-w-3xl mx-auto">
              {/* Text Section */}
              <div>
                <h3 className="text-2xl font-bold text-blue-800">Experience</h3>
                <p className="text-base text-gray-800 mt-2">
                  Ronsectetur adipiscing elit, sed do <br className="block md:hidden" /> eiusmod tempor incididunt <br className="block md:hidden" />
                  ut labore et dolore magna <br className="block md:hidden" /> aliqua.
                </p>
              </div>

              {/* Icon Section */}
              <img
                src={usbExperince}
                alt="Experience"
                width={70}
                height={70}
                className=" -mt-7"
              />
            </div>

            <div className="flex flex-row items-center justify-center  text-right md:justify-center gap-4 max-w-3xl mx-auto">
              <div>
              <h3 className="text-2xl font-bold text-blue-800">
                Top Noch Design
              </h3>
              <p className="text-base text-gray-800 mt-2">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              </div>
              <img
                src={usbDesign}
                width={70}
                height={70}
                alt="Top Noch Design"
                className=" -mt-7"
              />
            </div>

            <div className="flex flex-row items-center justify-center  text-right md:justify-center gap-4 max-w-3xl mx-auto">
              <div>
              <h3 className="text-2xl font-bold text-blue-800">Approach</h3>
              <p className="text-base text-gray-700 mt-2">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              </div>
              <img src={usbApproach} width={70} height={70} alt="Approach" className=" -mt-7" />
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
            <div className="flex flex-row items-center justify-center  text-left md:justify-center gap-4 max-w-3xl mx-auto">
              <img src={usbPricing} width={70} height={70} alt="Pricing" className=" -mt-7"/>
              <div>
              <h3 className="text-2xl font-bold text-blue-800">Pricing</h3>
              <p className="text-base text-gray-700 mt-2">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center  text-left md:justify-center gap-4 max-w-3xl mx-auto">
              <img src={usbDelivery} width={70} height={70} alt="Delivery" className=" -mt-7" />
              <div>
              <h3 className="text-2xl font-bold text-blue-800">Delivery</h3>
              <p className="text-base text-gray-700 mt-2">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center  text-left md:justify-center gap-4 max-w-3xl mx-auto">
              <img src={usbMaintainc} width={70} height={70} alt="Maintaince" className=" -mt-7" />
              <div>
              <h3 className="text-2xl font-bold text-blue-800">
                Maintaince
              </h3>
              <p className="text-base text-gray-700 mt-2">
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
