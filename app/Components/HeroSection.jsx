import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const heading = "We mine crypto with SOLAR ☀️";
  const content = "Solar Crypto is a revolutionary platform that harnesses the power of solar energy to mine cryptocurrencies like Bitcoin. With our platform, you can mine Bitcoin without worrying about the cost of electricity. ";

  return (
    <section className="bg-center bg-no-repeat pt-10 bg-gray-500 bg-blend-multiply " style={{backgroundImage: "url('https://images.unsplash.com/photo-1609726494499-27d3e942456c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{heading}</h1>
        <p className="mb-8 mt-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{content}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </a>  
        </div>
      </div>
    </section>
  );
};

export default HeroSection;