import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="flex-center mt-10 flex flex-col space-y-8 pb-96">
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className="flex-center h-[36px] w-[350px] cursor-pointer gap-1.5
      rounded-full border border-Grey hover:border-Light_Black hover:border-opacity-20 hover:bg-Grey hover:bg-opacity-30"
      >
        <p className="flex-center gap-1 font-Sans text-[15px] font-medium">
          Projects and Ideas Developed by Parvez
        </p>
        <Image
          className="pt-[2px]"
          src={"/assets/icons/arrow.svg"}
          alt="arrow"
          height={15}
          width={15}
        />
      </div>
      <div className="flex-col items-center justify-center space-y-6">
        <h1 className="gap-2 text-center font-Sans text-6xl font-extrabold">
          HEY, HI THERE !
        </h1>
        <h1 className="gap-2 text-center font-Sans text-6xl font-extrabold">
          I AM PARVEZ
        </h1>
      </div>
    </div>
  );
};

export default Hero;
