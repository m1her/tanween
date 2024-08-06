"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const HomeSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState("md");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageOffset = Math.min(scrollY / 2, 300);

  const getTranslateY = () => {
    switch (screenSize) {
      case "lg":
        return imageOffset > 299 ? 0 : imageOffset * 0.055; // Adjust for large screens
      case "md":
        return imageOffset > 290 ? 0 : imageOffset * 0.045; // Adjust for medium screens
      case "sm":
        return imageOffset > 130 ? 0 : imageOffset * 0.045; // Adjust for small screens
      default:
        return imageOffset * 0.05;
    }
  };

  return (
    <div
      id="home"
      className="w-full flex items-center justify-center rounded-[60px] md:h-[600px] sm:h-[365px] h-[270px] pt-6 md:px-16 px-8 pb-16 relative"
    >
      {/* <div className="w-full absolute top-0 left-0 rounded-[60px] overflow-hidden pt-6 md:px-16 px-8 pb-16">
        <div className=" relative w-full lg:h-[600px] md:h-[530px] sm:h-[300px] h-[200px] md:rounded-[60px] rounded-[30px] overflow-hidden">
          <Image
            src="/mainBarGif.gif"
            alt={""}
            fill
            className="md:rounded-[60px] rounded-[30px]"
          />
        </div>
      </div> */}
      <div className="w-full absolute top-0 left-0 md:rounded-[60px] rounded-[30px] overflow-hidden  pt-6 md:px-16 px-8 pb-16">
        <video
          className="md:rounded-[60px] rounded-[30px] w-full lg:h-[600px] md:h-[530px] sm:h-[300px] h-[200px] object-cover"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
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
        style={{
          transform: `translateY(${getTranslateY()}rem)`,
        }}
      />
    </div>
  );
};
