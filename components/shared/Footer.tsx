import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex-center">
      <div
        className="flex-between w-full max-w-[1200px]
       gap-12 bg-white p-3 md:p-6 2xl:mx-auto"
      >
        <div className="flex-between gap-1">
          <Image
            src={"/assets/images/copyright.png"}
            alt="copyright"
            height={16}
            width={16}
          />
          <p className="small-bold mt-[2px] md:text-[20px] md:font-semibold">2024</p>
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
