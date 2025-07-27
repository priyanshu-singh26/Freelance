import React from "react";
import Graph2 from "../assets/graph2.png"

export default function InfoWebDesign() {
  return (
    <section className="bg-[#d5fdd0] px-4 py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Simple Process to Design Extraordinary websites
        </h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto mb-2">
          Cube InfoTech’s website designing process never lacks research and analysis. Moreover, there will be complete transparency.
        </p>
        <p className="text-sm md:text-base max-w-2xl mx-auto mb-12">
          While we work on your website, you can call us anytime to know the progress of the project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#f91716] rounded-full w-36 h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={Graph2} alt="Consultation Icon" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-lg mt-4 mb-2">Consultation And Strategy Creation</h3>
            <p className="text-sm">
              Clients are first, therefore, we believe in attentive listening. Every business is unique, so has the website to be. We mix your business goals with our website designing experience and create an affordable web design solution.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0e2f93] rounded-full w-36 h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={Graph2} alt="Wireframe Icon" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-lg mt-4 mb-2">Wireframes And Mockups</h3>
            <p className="text-sm">
              We start by creating a wireframe and then a mockup. This is to give you a clear picture of how your website will look like after the entire process is complete. In this phase, making changes to design per your feedback is easily possible.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#f91716] rounded-full w-36 h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={Graph2} alt="Frontend Icon" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-lg mt-4 mb-2">Building Front End And Backend</h3>
            <p className="text-sm">
              Using the mockup for front end development is the next step. As well as creating functionality through code or integrating necessary API goes parallel. FYI custom code takes longer as compared to building a website on CMS.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0e2f93] rounded-full w-36 h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={Graph2} alt="Testing Icon" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-lg mt-4 mb-2">Testing To Ensure Perfection</h3>
            <p className="text-sm">
              After completing the front end and back end development, website is ready to go live. However, in order to ensure website works perfectly fine for all type of users, thorough testing is vital. After this, the website is ready to go live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
