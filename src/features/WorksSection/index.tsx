import { WorkCard } from "@/components/WorkCard";
import Carousel from "@/components/WorksSlider";
import React from "react";

export const WorksSection = () => {
  return (
    <div
      id="works"
      className="flex flex-col gap-y-12 items-center py-16 md:px-16 px-8"
    >
      <div className="text-primeColor text-2xl">أعمالنا</div>
      <Carousel />
    </div>
  );
};
