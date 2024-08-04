"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const HomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageOffset = Math.min(scrollY / 2, 300); // Adjust the divisor for desired scroll effect

  return (
    <div
      id="home"
      className="w-full lg:h-screen flex items-center justify-center rounded-[60px] md:h-[600px] h-[300px] pt-6 md:px-16 px-8 pb-16 relative"
    >
      <div className="w-full absolute top-0 left-0 rounded-[60px] overflow-hidden md:h-[600px] h-[300px] pt-6 md:px-16 px-8 pb-16">
        <video
          className="md:rounded-[60px] rounded-[30px] overflow-hidden"
          width="100%"
          controls={false}
          loop
          autoPlay
          muted
        >
          <source src="/mainBnr.mp4" type="video/mp4" />
        </video>
      </div>

      <Image
        src={"/Logo_white.svg"}
        width={475}
        height={388}
        alt={"Logo"}
        className="z-50 lg:w-[445px] md:w-[400px] w-[200px] h-auto transition-all ease-linear duration-150"
        style={{ transform: `translateY(${imageOffset > 290 ? 0 : imageOffset * 0.7}px)` }}
      />
    </div>
  );
};
