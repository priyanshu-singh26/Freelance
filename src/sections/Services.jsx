import React from 'react';
import Service1 from '../assets/web-design.jpeg';
import Service2 from '../assets/web-development.jpeg';
import Service3 from '../assets/ecomm-development.jpeg';

function Services() {
  const services = [
    {
      title: 'Website Design Services',
      description: 'Scale your online store with robust, flexible ecommerce platforms.',
      image: Service1
    },
    {
      title: 'Web Development Services',
      description: 'Boost your visibility and drive leads with full-funnel digital strategies.',
      image: Service2
    },
    {
      title: 'Ecommerce Development',
      description: 'Custom website solutions designed to convert and engage.',
      image: Service3
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-[72px] font-bold text-[#d0d0ec] absolute top-368  left-128 z-0 select-none hidden md:block">
          Services
        </h1>
        {/* Mobile carousel view */}
        <div className="md:hidden relative flex flex-col items-center space-y-4">
        <h2 className="text-[40px] font-bold text-[#d0d0ec] absolute top-[-30px] z-0 select-none">
          Services
        </h2>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative z-10">
          We Serve What We Have Expertise in
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Background Watermark Text */}
      {/* <h2 className="absolute text-[5rem] md:text-[5rem] font-black opacity-10 top-368  left-128 text-red-600 leading-none pointer-events-none select-none hidden md:block">
        Services
      </h2> */}
    </section>
  );
}

export default Services;
