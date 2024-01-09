import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="flex-center mt-10 flex-col pb-96">
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className="flex-center mx-3 h-auto w-auto cursor-pointer gap-1.5 text-wrap
        rounded-full border border-Grey px-5 py-2 transition-colors duration-300 ease-in-out
      hover:border-Light_Black hover:border-opacity-20 hover:bg-Grey hover:bg-opacity-30 lg:w-[420px]"
      >
        <p className="text-center font-Sans text-[14px] font-semibold text-Grey_700">
          Project Ideas and Products Developed by Parvez
        </p>

        <Image
          src={"/assets/icons/arrow.svg"}
          alt="arrow"
          height={15}
          width={15}
        />
      </div>
      <div className="mt-5 flex-col items-center justify-center">
        <h1
          className="gap-2 text-center font-Sans text-4xl font-extrabold 
        leading-[1.4] md:text-5xl md:leading-[1.4] lg:text-6xl lg:leading-[1.4]"
        >
          Hey, Hi There ! <br />
          <span className="primary-gradient">I am Parvez</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
