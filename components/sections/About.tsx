import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center mx-auto mt-60 max-w-[1440px] flex-col gap-4 lg:gap-8 2xl:mx-auto"
    >
      <div>
        <h1
          className="light-primary-gradient 
          text-center text-[36px] font-normal
          tracking-[-0.25%] xs:text-[52px]
          md:text-[78px] lg:text-[120px] lg:font-normal"
        >
          ABOUT ME
        </h1>
      </div>

      <div
        className="flex-center md:flex-start 
      h-auto w-full max-w-[1440px] flex-col gap-6 md:flex-row md:gap-12"
      >
        <div className="aspect-h-10 aspect-w-5 h-auto w-full md:aspect-h-12 md:aspect-w-16 md:h-full">
          <Image
            src={"/assets/images/profile.png"}
            alt="profile"
            height={4096}
            width={2297}
          />
        </div>

        <div className="flex-start h-auto w-auto max-w-[768px] flex-col gap-5">
          <p className="heading3 md:heading3 lg:heading2 text-black">
            A brief intro, who am I ?
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            I am an independent Full Stack Web Developer, Web 2.0 Full Stack
            Developer based in TamilNadu, India.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            I create and develop modern applications which could be minimalistic
            and performance optimized for businesses to help them stand out in
            the digital landscape with a powerful impact.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            Stands out with Modern Technology including Next.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
