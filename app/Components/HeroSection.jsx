import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-auto">
          <h1 className="text-white text-4xl mb-4 lg:text-6xl">Mehedi Hasan</h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adisicing elit.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg: mt-0">
          <div className="rounded-full bg = [#181818] w-[500px] h-[500px] relative">
            <Image
              src={"/images/hero.jpeg"}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="image of bitcoin"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
