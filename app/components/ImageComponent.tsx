import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const ImageComponent = ({ src, alt, height, width }: Props) => {
  return (
    <div>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
};

export default ImageComponent;
