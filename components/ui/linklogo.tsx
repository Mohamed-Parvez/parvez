import React from "react";
import { LinkLogoImages } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const LinkLogoSmall = () => {
  return (
    <div className="lg:hidden">
      {LinkLogoImages.map((images) => (
        <div key={images.label} className="flex-start gap-3">
          <div className="mt-2">
            <Image src={images.src} alt={images.label} height={14} width={14} />
          </div>
          <div>
            <Link href={images.href} rel="noopener noreferrer" target="_blank">
              <p className="small-regular lg:paragraph-regular hover-underline-animation mt-2 text-grey-700">
                {images.label}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export const LinkLogoLarge = () => {
  return (
    <div className="hidden lg:block">
      {LinkLogoImages.map((images) => (
        <div key={images.label} className="flex-start gap-3 ">
          <div className="mt-[15px]">
            <Image src={images.src} alt={images.label} height={20} width={20} />
          </div>
          <div>
            <Link href={images.href} rel="noopener noreferrer" target="_blank">
              <p className="small-regular lg:paragraph-regular hover-underline-animation mt-2 text-grey-700">
                {images.label}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
