"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col ">
      <Image
        height={3000}
        width={3000}
        alt="hero"
        className="h-[500px] w-[813.6px]"
        src="/assets/hero.png"
      />
    </div>
  );
};
