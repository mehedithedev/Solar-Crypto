import React from "react";

const Testimonial = () => {
    return (
        <section className="m-20">
             <div className="text-center">
                    <h1 className="text-4xl font-bold mt-20 mb-20">What people are saying about us</h1>
            </div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
               

                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this.</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>
                {/* Repeat the figure element for other testimonials */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Environment Friendly</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this.</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Jenefier</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Employee at Nice Hash</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </section>
    );
};

export default Testimonial;

