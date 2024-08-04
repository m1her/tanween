import { ServiceCard } from "@/components/ServiceCard";
import React from "react";

export const ServicesSection = () => {
  return (
    <div id="services" className="flex flex-col gap-y-12 items-center py-16 md:px-16 px-8">
      <div className="text-primeColor text-2xl">خدماتنا</div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <ServiceCard
          imageSrc={"/photograph.png"}
          title={"التصوير الفوتوغرافي"}
          text={
            "تقدم جلسات تصوير احترافية لالتقاط صور عالية الجودة للأفراد، الأحداث، المنتجات، أو الأماكن باستخدام تقنيات وإضاءة متخصصة لتعزيز الجمال والدقة"
          }
        />
        <ServiceCard
          imageSrc={"/marketing.png"}
          title={"التسويق الالكتروني"}
          text={
            "تروّج للمنتجات والخدمات عبر الإنترنت باستخدام استراتيجيات متعددة مثل الإعلانات الرقمية، تحسين محركات البحث، والتسويق التواصل الاجتماعي لزيادة العائدات"
          }
        />
        <ServiceCard
          imageSrc={"/visual.png"}
          title={"الهوية البصرية"}
          text={
            "خدمة تصميم الهوية تبتكر وتطوير العلامات التجارية عبر إنشاء شعارات، وألوان، وخطوط، وعناصر بصرية متكاملة تعبر عن هوية المؤسسة وتعزز تميزها في السوق"
          }
        />
        <ServiceCard
          imageSrc={"/cenimatic.png"}
          title={"التصوير السينيمائي"}
          text={
            "خدمة التصوير السينمائي توفر إنتاج مقاطع فيديو وأفلام بجودة احترافية، باستخدام تقنيات إضاءة وتصوير متقدمة لخلق تجربة بصرية متميزة وسرد قصصي مؤثر"
          }
        />
      </div>
    </div>
  );
};
