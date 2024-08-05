import Image from "next/image";
import React from "react";

export const WorkCard = ({
  imgUrl,
  title,
  text,
  logo,
  logoSize,
}: {
  imgUrl: string;
  title: string;
  text: string;
  logo: string;
  logoSize: string;
}) => {
  return (
    <div className="h-[530px] w-[305px] relative rounded-[30px] md:shadow-[0_2px_30px_0_rgba(0,0,0,0.8)] shadow-[0_2px_15px_0_rgba(0,0,0,0.8)]">
      <Image
        src={imgUrl}
        fill
        alt={""}
        sizes=""
        className="w-auto h-auto rounded-[30px]"
      />
      <div className="absolute text-end w-[307px] h-full py-12 px-4 rounded-[30px] top-[1px] -left-[1px] flex flex-col flex-1 gap-y-2 justify-end bg-gradient-to-t from-[#0A081D] to-transparent">
        <div className="w-full flex justify-end -mb-1">
          <div className={`relative ${logoSize}`}>
            <Image src={logo} fill alt={""} sizes="" className="" />
          </div>
        </div>
        <div className="text-primeColor text-[36px]">{title}</div>
        <div className="text-sm text-[#ED2025]">{text}</div>
      </div>
    </div>
  );
};
