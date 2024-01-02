import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  height: number;
  width: number;
  classname: string;
}

const ImageComponent = ({ src, alt, height, width, classname }: Props) => {
  return (
    <div>
      <Image src={src} alt={alt} height={height} width={width} className={classname} />
    </div>
  );
};

export default ImageComponent;
