"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugComponents = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");
   
  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt="pic"
        width={400}
        height={400}
      />
      
    </div>
  );
};

export default SlugComponents;
