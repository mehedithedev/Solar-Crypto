import React from "react";
import Image from "next/image";
import one from "../Components/images/People/one.jpg";
import two from "../Components/images/People/two.jpg";
import three from "../Components/images/People/three.jpg";

import five from "../Components/images/People/five.jpg";
import six from "../Components/images/People/six.jpg";


const Testimonial = () => {
    return (
        <section className="m-20">
             <div className="text-center">
                    <h1 className="text-4xl font-bold mt-20 mb-20">What people are saying about us</h1>
            </div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
               

                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Crypto, Clean Energy: Solar Crypto Impact</h3>
                        <p className="my-4">Unveiling the Efficiency of Solar-Powered Mining with Solar Crypto
Solar Crypto has redefined crypto mining efficiency through solar power. Our testimonial reflects the seamless integration of cutting-edge technology and sustainable practices, paving the way for a more responsible crypto industry.</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <Image 
                            className="rounded-full w-9 h-9" 
                            src={one} 
                            alt="profile picture"
                         />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Vicky</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 "> BIT Mining Rig </div>
                        </div>
                    </figcaption>    
                </figure>
                {/* Repeat the figure element for other testimonials */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Where Profit Meets Planet</h3>
                        <p className="my-4">Beyond the numbers, Solar Crypto has empowered us to make a positive impact on the environment. Our journey with them represents a commitment to responsible mining practices that not only benefit us but also contribute to a healthier planet.</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                    <Image 
                            className="rounded-full w-9 h-9" 
                            src={three} 
                            alt="profile picture"
                         />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Denissa</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Argo Blockchain Plc</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Empowering Eco-Friendly Mining</h3>
                        <p className="my-4">
                       
Joining forces with Solar Crypto has been a transformative experience. Their commitment to harnessing solar energy for crypto mining has not only optimized our returns but also fueled our passion for a cleaner, greener tomorrow.
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                    <Image 
                            className="rounded-full w-9 h-9" 
                            src={five} alt="profile picture"
                         />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Jenefier</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Employee at Nice Hash</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sustainable Mining Success</h3>
                        <p className="my-4">
                        Our Journey to a Greener Future in Crypto with Solar Crypto
Embrace the future of cryptocurrency mining with Solar Crypto. Our collaboration has not only maximized profits but also marked a significant step towards a sustainable and eco-friendly mining ecosystem.
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                    <Image 
                            className="rounded-full w-9 h-9" 
                            src={six} alt="profile picture"
                         />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Max</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">TeraWulf Inc</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </section>
    );
};

export default Testimonial;

