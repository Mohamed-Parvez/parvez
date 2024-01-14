import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center mx-auto mb-36 mt-24 max-w-[1440px] flex-col gap-6 2xl:mx-auto"
    >
      <div>
        <h1
          className="primary-gradient heading2 md:heading1
          text-center lg:text-9xl lg:font-normal"
        >
          ABOUT ME
        </h1>
      </div>

      <div
        className="flex-center md:flex-start mt-[32px]
      h-auto max-w-[1440px] flex-col gap-6 md:flex-row md:gap-12"
      >
        <div
          className="aspect-square h-auto max-h-[800px] w-full max-w-[768px] rounded-md
          shadow-sm ring-1 ring-grey-700 md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px]"
        ></div>

        <div className="flex-start h-auto w-auto max-w-[768px] flex-col gap-5">
          <p className="heading3 md:heading3 lg:heading2 text-black">
            A brief intro, who am I ?
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            I am an independent Full Stack Web Developer, Web 2.0 Full Stack
            Developer based in TamilNadu, India.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            I specialize in crafting elevated, intuitive, and minimalistic
            designs for startups and small businesses to help them stand out in
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
