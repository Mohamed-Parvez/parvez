import React from "react";
import { SkillsImagesFirst, SkillsImagesSecond } from "@/constants";
import Image from "next/image";

interface Props {
  height: number;
  width: number;
}

export const SkillsFirst = ({ height, width }: Props) => {
  return (
    <div className="flex-center space-x-6 md:space-x-12">
      {SkillsImagesFirst.map((images) => (
        <Image
          src={images.src}
          key={images.label}
          alt={images.label}
          height={height}
          width={width}
        />
      ))}
    </div>
  );
};

export const SkillsSecond = ({ height, width }: Props) => {
  return (
    <div className="flex-center space-x-6 md:space-x-12">
      {SkillsImagesSecond.map((images) => (
        <Image
          src={images.src}
          key={images.label}
          alt={images.label}
          height={height}
          width={width}
        />
      ))}
    </div>
  );
};
