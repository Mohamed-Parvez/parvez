import React from "react";

const ProjectOne = () => {
  return (
    <section>
      <div className="flex-center mx-auto mt-12 max-w-[1440px] flex-col gap-4 md:mt-40 lg:gap-8 2xl:mx-auto">
        <div>
          <h1
            className="light-primary-gradient 
          text-center text-[36px] font-normal
          tracking-[-0.25%] xs:text-[52px]
          md:text-[78px] lg:text-[120px] lg:font-normal"
          >
            PROJECTS
          </h1>
        </div>

        <div
          className="aspect-square h-auto max-h-[800px] w-full max-w-[1200px] rounded-xl
          shadow-sm ring-1 ring-grey-700"
        ></div>
      </div>

      <div className="flex-start mt-5 gap-3">
        <div className="rounded-full px-4 py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5 xs:py-[9px] md:px-6 md:py-[11px]">
          <p className="text-[12px] font-normal xs:text-[13px] md:text-[15px]">
            2024
          </p>
        </div>
        <div className="rounded-full px-4 py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5  xs:py-[9px] md:px-6 md:py-[11px]">
          <p className="text-[12px] font-normal xs:text-[13px] md:text-[15px]">
            Parvez Portfolio Website
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;