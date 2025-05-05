"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Title from "@/components/ui/Title";


import BlurText from "@/components/ui/BlurText";

import ServicesCarousel from "@/components/ui/ServicesCards/ServicesCarousel";

export default function ServiceTimes() {
  const { t } = useTranslation();

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const services = [
    {
      title: t("footer.sunday-service-title"),
      time: t("footer.sunday-service"),
      icon: "🙏",
    },
    {
      title: t("footer.tuesday-service-title"),
      time: t("footer.tuesday-service"),
      icon: "✝️",
    },
    {
      title: t("footer.thursday-service-title"),
      time: t("footer.thursday-service"),
      icon: "📖",
    },
    {
      title: t("footer.saturday-service-title"),
      time: t("footer.youth-service"),
      icon: "🎵",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div className="w-full mx-auto pt-24 bg-cover bg-center bg-no-repeat bg-pattern bg-black">
      <div className="relative h-auto">
      

        <div className="pt-10 absolute inset-0 bg-[black] bg-opacity-30 rounded-lg flex items-center justify-center z-10">
          <h1 className=" px-4">
            {/* {t("about.title")} */}
            <BlurText
              text={`${t("home.schedule.title")}`}
              delay={300}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl mt-0 lg:text-5xl font-black text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none"
            />
          </h1>
        </div>
      </div>
       

        <div className="w-full mx-auto py-24 md:px-6 lg:px-8 ">
          <ServicesCarousel />
        </div>
      </div>
    </>
  );
}
