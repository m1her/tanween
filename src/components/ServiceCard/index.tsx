import Image from "next/image";
import React from "react";

export const ServiceCard = ({
  imageSrc,
  title,
  text,
}: {
  imageSrc: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-full md:aspect-video md:h-auto h-[300px] relative rounded-[30px] overflow-hidden">
      <Image src={imageSrc} alt={""} fill sizes="" className="rounded-[30px]" />
      <div className="flex items-center py-4 px-6 gap-x-4 absolute bottom-0 bg-[#0A081D]/50 backdrop-blur">
        <div className="text-primeColor">
          <div className="md:text-3xl text-xl mb-2">{title}</div>
          <div className="md:text-sm text-xs">{text}</div>
        </div>
        <div className="md:w-16 w-14 flex-shrink-0 aspect-square rounded-full flex items-center justify-center bg-white text-[#ED2025]">
          <svg
            className="w-8 fill-[#ED2025]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
