import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center mx-auto mb-36 mt-24 max-w-[1440px] flex-col gap-6 lg:mx-8 2xl:mx-auto"
    >
      <div>
        <h1
          className="secondary-gradient text-center font-Sans text-4xl font-medium
         sm:text-5xl sm:font-medium md:text-6xl md:font-medium lg:text-8xl lg:font-medium"
        >
          ABOUT ME
        </h1>
      </div>

      <div
        className="flex-center md:flex-start
      m-3 h-auto max-w-[1440px] flex-col gap-6 md:flex-row"
      >
        <div
          className="m-3 aspect-square h-auto max-h-[800px] w-full max-w-[768px] rounded-md
          shadow-sm ring-1 ring-Grey_700 md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px]"
        ></div>

        <div className="flex-start m-3 h-auto w-auto max-w-[768px] flex-col gap-5">
          <p className="font-Sans text-3xl font-extrabold text-Black md:text-4xl lg:text-5xl">
            A brief intro, who am I ?
          </p>

          <p className="font-Sans text-[16px] font-normal leading-[1.8] text-gray-800 lg:text-[20px]">
            I am an independent Full Stack Web Developer, Web 2.0 Full Stack
            Developer based in TamilNadu, India.
          </p>
          <p className="font-Sans text-[16px] font-normal leading-[1.8] text-gray-800 lg:text-[20px]">
            I specialize in crafting elevated, intuitive, and minimalistic
            designs for startups and small businesses to help them stand out in
            the digital landscape with a powerful impact.
          </p>
          <p className="font-Sans text-[16px] font-normal leading-[1.8] text-gray-800 lg:text-[20px]">
            Stands out with Modern Technology including Next.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
