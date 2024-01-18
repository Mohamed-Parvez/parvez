import Image from "next/image";
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
          className="flex-center aspect-h-10 aspect-w-15 h-auto w-full overflow-hidden
          rounded-xl bg-project-bg bg-cover shadow-sm ring-1 ring-grey-700 md:rounded-2xl lg:rounded-3xl"
        >
          <Image
            className="px-6 py-8 xs:px-[34px] xs:py-[54px] md:px-[38px] md:py-[72px] lg:px-[68px] lg:py-[88px]"
            src={"/assets/images/project.png"}
            alt="project"
            height={616}
            width={1364}
          />
        </div>
      </div>

      <div className="flex-start mt-5 gap-3">
        <div className="rounded-full px-[12px] py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5 xs:py-[9px] md:px-6 md:py-[11px]">
          <p className="text-[10px] font-normal text-grey-700 xs:text-[13px] md:text-[15px]">
            2024
          </p>
        </div>
        <div className="rounded-full px-[12px] py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5  xs:py-[9px] md:px-6 md:py-[11px]">
          <p className="text-[10px] font-normal text-grey-700 xs:text-[13px] md:text-[15px]">
            NextJs Typescript Tailwind PostgreSql
          </p>
        </div>
      </div>

      <div className="flex-start mt-3 flex-col space-y-1 md:space-y-3">
        <p className="body-semibold md:heading3">PARVEZ PORTFOLIO WEBSITE</p>
        <p className="small-regular md:base-regular text-grey-700">
          Full stack Next.js
        </p>
      </div>
    </section>
  );
};

export default ProjectOne;
