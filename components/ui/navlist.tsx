import { NavProperties } from "@/constants";
import Link from "next/link";
import React from "react";

const Navlist = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex-between gap-5">
        {NavProperties.map((data) => (
          <Link
            key={data.key}
            href={data.href}
            className="body-text p-1 text-center text-grey-700
            hover:text-black"
          >
            <li>{data.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navlist;
