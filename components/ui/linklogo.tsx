import React from "react";
import { LinkLogoImages } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const LinkLogo = () => {
  return (
    <>
      {LinkLogoImages.map((images) => (
        <div key={images.label} className="flex-between gap-3">
          <Image src={images.src} alt={images.label} height={30} width={30} />
          <Link href={images.href}>
            <p className="paragraph-regular mt-2 text-grey-700">
              {images.label}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default LinkLogo;
