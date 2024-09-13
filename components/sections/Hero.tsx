import Image from "next/image";
import React from "react";
import { ButtonPopup } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="flex-center mt-36 flex-col md:mt-20">
      <Link href={"#projects"}>
        <div
          className="flex-center h-auto w-auto cursor-pointer gap-1.5
        rounded-full border border-grey px-5 py-2 transition-colors duration-300 ease-in-out
      hover:border-grey-700/20 hover:bg-grey/30 lg:w-[420px]"
        >
          <p className="small-regular text-center text-grey-700">
            Project Ideas and Products Developed by Parvez
          </p>
          <Image
            src={"/assets/icons/arrow.svg"}
            alt="arrow"
            height={15}
            width={15}
          />
        </div>
      </Link>

      <div className="mt-12 flex-col items-center justify-center md:mt-8">
        <h1
          className="heading3_2 xs:heading2 sm:heading1 gap-2 text-center
          xl:text-7xl xl:leading-[90px]"
        >
          HEY, HI THERE !
          <br />
          <span className="primary-gradient">I AM PARVEZ</span>
        </h1>

        <div className="mt-12 h-auto w-auto max-w-[380px] sm:max-w-[460px] md:mt-8 md:max-w-[500px] lg:mt-8">
          <h2
            className="body-medium lg:paragraph-regular mt-4 text-center
           text-grey-700 md:text-lg lg:mt-8"
          >
            Web Developer for over past 1 Years and made Unique Websites using
            Advanced Web Tools
          </h2>
        </div>
      </div>

      <div className="flex-center mt-12 h-auto w-auto gap-3 md:mt-8">
        <ButtonPopup
          label="Resume"
          variant={"btn-resume"}
          type={"button"}
          href="https://res.cloudinary.com/dlwlrv6c4/image/upload/f_auto,q_auto/lv0v5lcbxvjprvdctkj5"
        />
        <ButtonPopup
          label="Github"
          variant={"btn-github"}
          type={"button"}
          href="https://github.com/Mohamed-Parvez"
        />
      </div>
    </section>
  );
};

export default Hero;
