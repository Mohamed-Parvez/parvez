import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div id="hero" className="flex-center mt-16 flex-col">
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className="flex-center mx-3 h-auto w-auto cursor-pointer gap-1.5 text-wrap
        rounded-full border border-Grey px-5 py-2 transition-colors duration-300 ease-in-out
      hover:border-Light_Black hover:border-opacity-20 hover:bg-Grey hover:bg-opacity-30 lg:w-[420px]"
      >
        <p className="text-center font-Sans text-[14px] font-bold text-Grey_700">
          Project Ideas and Products Developed by Parvez
        </p>
        <Image
          src={"/assets/icons/arrow.svg"}
          alt="arrow"
          height={15}
          width={15}
        />
      </div>

      <div className="mt-4 flex-col items-center justify-center lg:mt-8">
        <h1
          className="gap-2 text-center font-Sans text-4xl font-extrabold 
        leading-[1.4] md:text-5xl md:leading-[1.4] lg:text-6xl lg:leading-[1.4] 
        xl:text-7xl xl:leading-[90px]"
        >
          HEY, HI THERE !
          <br />
          <span className="secondary-gradient">I AM PARVEZ</span>
        </h1>

        <div className="m-3 mt-4 h-auto w-auto max-w-[380px] md:max-w-[500px] lg:mt-8">
          <h2
            className="mt-4 text-center font-Sans text-[15px] font-medium text-Grey_700
           md:text-lg lg:mt-8 lg:text-xl"
          >
            Web Developer for over past 2 Years and made Unique Websites using
            Advanced Web Tools
          </h2>
        </div>
      </div>

      <div className="flex-center mt-4 h-auto w-auto gap-3 lg:mt-8">
        <Button label="Resume" variant={"btn-resume"} type={"button"} href="" />
        <Button label="Github" variant={"btn-github"} type={"button"} href="" />
      </div>
    </div>
  );
};

export default Hero;
