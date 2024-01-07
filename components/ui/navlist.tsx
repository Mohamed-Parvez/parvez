import { NavProperties } from "@/constants";
import Link from "next/link";
import React from "react";

const Navlist = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex-between gap-7 font-Sans">
        {NavProperties.map((data) => (
          <Link key={data.key} href={data.href}>
            <li>{data.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navlist;
