import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex-center">
      <div
        className="flex-between mx-5 w-full max-w-[1440px] gap-12
        bg-white py-4 md:mx-10 xl:mx-28"
      >
        <div className="flex-between gap-1">
          <Image
            src={"/assets/images/copyright.png"}
            alt="copyright"
            height={16}
            width={16}
          />
          <p className="small-bold mt-[2px] md:text-[20px] md:font-semibold">
            2024
          </p>
        </div>
        <div>
          <p className="small-regular md:body-regular text-gray-700">
            Designed and Developed by Mohamed Parvez
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
