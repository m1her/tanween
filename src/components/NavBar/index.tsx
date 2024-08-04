import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full px-6 pt-6 flex items-center justify-center md:gap-x-12 gap-x-6 text-[#F0E6E7] lg:text-2xl md:text-xl text-lg">
      <Link href="#home" className="group cursor-pointer">
        <div>الرئيسية</div>
        <div className="h-0.5 mt-0.5 bg-[#F0E6E7] w-full scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </Link>
      <Link href="#services" className="group cursor-pointer">
        <div>الخدمات</div>
        <div className="h-0.5 mt-0.5 bg-[#F0E6E7] w-full scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </Link>
      <Link href="#works" className="group cursor-pointer">
        <div>الأعمال</div>
        <div className="h-0.5 mt-0.5 bg-[#F0E6E7] w-full scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </Link>
      <Link href="#contacts" className="group cursor-pointer">
        <div>التواصل</div>
        <div className="h-0.5 mt-0.5 bg-[#F0E6E7] w-full scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </Link>
    </div>
  );
};
