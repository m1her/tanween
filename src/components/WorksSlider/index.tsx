"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { WorkCard } from "../WorkCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const slider = useRef(null);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full md:px-8 px-2">
      <Slider ref={slider} {...settings} className="">
        <div className="lg:px-8 py-12 !flex justify-center">
          <WorkCard
            imgUrl={"/caffea.png"}
            title={"كافيا"}
            text={"تسويق الكتروني • تصوير فوتوغرافي"}
            logo="/cafia.png"
            logoSize="w-10 h-5"
          />
        </div>
        <div className="lg:px-8 py-12 !flex justify-center">
          <WorkCard
            imgUrl={"/kayabel.png"}
            title={"كيابل"}
            text={"تصوير فوتوغرافي • تسويق الكتروني"}
            logo="/cables.png"
            logoSize="h-6 w-14"
          />
        </div>
        <div className="lg:px-8 py-12 !flex justify-center">
          <WorkCard
            imgUrl={"/Specialists.png"}
            title={"المختصون"}
            text={"تصميم الهوية • تسويق الكتروني"}
            logo="/almokhtasoon.png"
            logoSize="h-6 w-20"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

const SamplePrevArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} md:!-right-14 !-right-7 md:!w-[50px] md:!h-[50px] !w-7 !h-7`}
    >
      <svg
        className="w-8 fill-[#ED2025]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
      </svg>
    </div>
  );
};

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} md:!-left-14 !-left-7 md:!w-[50px] md:!h-[50px] !w-7 !h-7`}
    >
      <svg
        className="md:w-8 w-5 fill-[#ED2025]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" />
      </svg>
    </div>
  );
}
