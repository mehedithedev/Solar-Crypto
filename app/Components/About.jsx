import React from "react";

const About = () => {
  return (
    <div className="m-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-20">About our journey</h1>
      </div>
    <ol className="relative">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Solar-Crypto 2.0{" "}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 19th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            We made our crypto mining platform more secure and more reliable by adding multi-factor authentication, on top of that, increased number of miners and solar panels to our platform.
          </p>
          
      
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Solar-Crypto 1.1
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 5th, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
           We accquired 400 + new crypto miners and 1000 + solar panels.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Solar-Crypto 1.0
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           August 3rd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            We started our journey with 100 crypto miners and 200 solar panels.
          </p>
        </li>
      </ol>
      <div className="m-30 content mt-20">
        <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
          {" "}
          Solar-Crytpo is different
        </p>
        <p class="text-gray-500 dark:text-gray-400">
        Welcome to Solar-Crypto, a pioneering platform revolutionizing cryptocurrency mining by harnessing solar energy to power operations, with a primary focus on mining Bitcoin. Our innovative approach ensures swift, user-friendly experiences, eliminating the complexities of traditional ITSM solutions. Committed to accelerating development and minimizing toil, Solar-Crypto automates tasks, enabling miners to concentrate on strategic decisions. Deploying changes is seamless, catering to both experienced miners and newcomers. Our platform prioritizes environmental sustainability, contributing to a greener crypto-mining ecosystem. With a transparent audit trail for every change, Solar-Crypto sets a new standard for integrity in the evolving world of digital currency. Celebrate one year of shaping a sustainable, efficient future with Solar-Crypto.
        </p>
      </div>
    </div>
  );
};

export default About;
