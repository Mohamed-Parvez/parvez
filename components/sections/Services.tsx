import React from "react";
import { SkillsFirst, SkillsSecond } from "../ui/skills";

const Services = () => {
  return (
    <section
      id="services"
      className="flex-center mx-auto mt-28 max-w-[1440px] flex-col gap-4 md:mt-40 lg:gap-8 2xl:mx-auto"
    >
      <div>
        <h1
          className="light-primary-gradient 
          text-center text-[36px] font-normal
          tracking-[-0.25%] xs:text-[52px]
          md:text-[78px] lg:text-[120px] lg:font-normal"
        >
          SERVICES
        </h1>
      </div>

      <div
        className="flex-center md:flex-start 
        h-auto max-w-[1440px] flex-col gap-6 md:flex-row md:gap-12"
      >
        <div className="flex-start h-auto w-auto max-w-[768px] flex-col gap-5">
          <p className="heading3 md:heading3 lg:heading2 text-black">
            my tech stack technologies.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            For the frontend i use Next.js and Tailwind Css, for Backend Next
            API routes for performance and Search Engine Optimization (SEO)
            purposes.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            I use PostgreSql as a nosql database along with Prisma as a ORM, for
            everything i use to work with Typescript for type safety and i use
            docker and Vercel for deployment.
          </p>
        </div>

        <div className="flex-start h-auto w-auto max-w-[768px] flex-col gap-5">
          <p className="heading3 md:heading3 lg:heading2 text-black">
            my digital tool box.
          </p>
          <p className="body-text lg:paragraph-regular text-gray-800">
            These are my go to tech stack to make any projects happen. I am
            always eager of learning more about my current stack, and new
            technologies that could expand my horizons.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-14">
        <div className="hidden space-y-8 md:block">
          <SkillsFirst height={70} width={70} />
          <SkillsSecond height={70} width={70} />
        </div>
        <div className="space-y-6 xs:hidden">
          <SkillsFirst height={24} width={24} />
          <SkillsSecond height={24} width={24} />
        </div>
        <div className="hidden space-y-6 xs:block md:hidden">
          <SkillsFirst height={38} width={38} />
          <SkillsSecond height={38} width={38} />
        </div>
      </div>
    </section>
  );
};

export default Services;
