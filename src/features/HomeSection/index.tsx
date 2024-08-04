import Image from "next/image";
import React from "react";

export const HomeSection = () => {
  return (
    <div
      id="home"
      className="w-full lg:h-screen md:h-[600px] h-[300px] pt-6 md:px-16 px-8 pb-16 relative"
    >
      <div className="w-full h-full relative">
        <Image src={"/homeBgImg.png"} alt={""} fill sizes="" />
      </div>

      <Image
        src={"/Logo_white.svg"}
        width={475}
        height={388}
        alt={"Logo"}
        className="absolute md:-bottom-2 bottom-4 left-1/2 -translate-x-1/2 lg:w-[475px] md:w-[400px] w-[250px] h-auto"
      />
    </div>
  );
};
