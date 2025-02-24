"use client";
import { useEffect } from "react";
import GridMotion from "@/components/ui/GridMotion";
import BlurText from "@/components/ui/BlurText";
import { useTranslation } from "react-i18next";

import Image from "next/image";

interface AboutClientProps {
  serverImages: string[];
}

export default function AboutClient({ serverImages }: AboutClientProps) {
  const { t } = useTranslation();

  const items = serverImages;

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="w-full mx-auto py-16">
      <div className="relative h-[80vh] mb-16">
        <GridMotion items={items} />

        <div className="absolute inset-0 bg-[black] bg-opacity-30 rounded-lg flex items-center justify-center z-10">
          <h1 className=" px-4">
            {/* {t("about.title")} */}
            <BlurText
              text={`${t("about.title")}`}
              delay={300}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl mt-0 lg:text-5xl font-black text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none"
            />
          </h1>
        </div>
      </div>
      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 ">
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            {t("about.mission.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.mission.description")}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{t("about.vision.title")}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.vision.description")}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="px-4 md:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("about.values.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["faith", "community", "service"].map((value) => (
            <div
              key={value}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`about.values.${value}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`about.values.${value}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="px-4 md:px-6 lg:px-8 mb-16">

        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("about.leadership.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["pastor", "elder1", "elder2"].map((leader) => (
            <div
              key={leader}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={t(`about.leadership.${leader}.image`)}
                  alt={t(`about.leadership.${leader}.name`)}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t(`about.leadership.${leader}.name`)}
              </h3>
              <p className="text-gray-600 mb-2">
                {t(`about.leadership.${leader}.role`)}
              </p>
              <p className="text-gray-600">
                {t(`about.leadership.${leader}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
