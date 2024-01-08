import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"#hero"}>
        <Image
          className="pt-[15px] "
          src={"/assets/images/logo.svg"}
          alt="logo"
          height={30}
          width={96}
        />
      </Link>
    </>
  );
};

export default Logo;
