import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTwo = () => {
  return (
    <Link href={"https://propty.vercel.app"}>
      <div className="mx-auto mt-20 max-w-[1440px] flex-col gap-4 lg:gap-8">
        <div
          className="flex-center aspect-h-12 aspect-w-16 h-full w-full overflow-hidden rounded-xl
          bg-project-bg bg-cover object-cover shadow-sm ring-1 ring-grey-700 md:rounded-2xl lg:rounded-3xl"
        >
          <Image
            className="px-6 py-8 xs:px-[34px] xs:py-[54px] md:px-[38px] md:py-[72px] lg:px-[68px] lg:py-[88px]"
            src={"/assets/images/propty.png"}
            alt="project"
            height={1502}
            width={2460}
          />
        </div>

        <div className="flex-start mt-5 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <div className="rounded-full px-[12px] py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5 xs:py-[9px] md:px-6 md:py-[11px]">
              <p className="text-[10px] font-normal text-grey-700 xs:text-[13px] md:text-[15px]">
                2024
              </p>
            </div>
            <div className="rounded-full px-[12px] py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5  xs:py-[9px] md:px-6 md:py-[11px]">
              <p className="text-[10px] font-normal text-grey-700 xs:text-[13px] md:text-[15px]">
                NextJs Typescript Tailwindcss
              </p>
            </div>
          </div>
          <div className="rounded-full px-[12px] py-[7px] shadow-sm ring-1 ring-grey-700 xs:px-5 xs:py-[9px] md:px-6 md:py-[11px]">
            <p className="text-[10px] font-normal text-grey-700 xs:text-[13px] md:text-[15px]">
              Postgresql Redux-Toolkit
            </p>
          </div>
        </div>

        <div className="flex-start mt-3 flex-col space-y-1 md:space-y-3">
          <p className="body-semibold md:heading3">
            PROPTY REAL ESTATE PLATFORM
          </p>
          <p className="small-regular md:base-regular text-grey-700">
            Full stack Next.js
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTwo;
