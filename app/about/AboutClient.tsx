"use client";
import { useEffect } from "react";
import GridMotion from "@/components/ui/GridMotion";
import { AnimatedMinistries } from "@/components/ui/AnimatedMinistries";
import BlurText from "@/components/ui/BlurText";
import Featured from "@/components/Featured";
import { useTranslation } from "react-i18next";

import Title from "@/components/ui/Title";

interface AboutClientProps {
  serverImages: string[];
}

interface FeaturedSection {
  altImage: string;
  image: string;
}

const featuredSections: FeaturedSection[] = [
  {
    altImage: "faith",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Ffe-biblica.png?alt=media&token=d9ebdbe0-66d7-459a-bb34-35e7cc734bbf",
  },
  {
    altImage: "community",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fcomunidad-autentica.png?alt=media&token=32e82dae-0c92-4ef5-b922-cc6f516c80c3",
  },
  {
    altImage: "service",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fliderazgo-servidor.png?alt=media&token=affe4a88-77b1-435a-946f-6348d0543cba",
  },
];

export default function AboutClient({ serverImages }: AboutClientProps) {
  const { t } = useTranslation();

  const items = serverImages;
  const ministries = [
    {
      quote: `${t("about.ourMinistries.pastors.quote")}`,
      name: `${t("about.ourMinistries.pastors.name")}`,
      designation: `${t("about.ourMinistries.pastors.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2FPastores.jpeg?alt=media&token=9249c93d-8711-4444-8deb-34752c0f1059",
    },
    {
      quote: `${t("about.ourMinistries.worshipTeam.quote")}`,
      name: `${t("about.ourMinistries.worshipTeam.name")}`,
      designation: `${t("about.ourMinistries.worshipTeam.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Falabanza.jpg?alt=media&token=e422d14a-3a42-4e16-a2a1-6fb912f969a0",
    },
    {
      quote: `${t("about.ourMinistries.womenMinistry.quote")}`,
      name: `${t("about.ourMinistries.womenMinistry.name")}`,
      designation: `${t("about.ourMinistries.womenMinistry.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Fmujeres-2.jpeg?alt=media&token=fed05f69-c409-4fb7-b39f-2d0d42745e17",
    },
    {
      quote: `${t("about.ourMinistries.menMinistry.quote")}`,
      name: `${t("about.ourMinistries.menMinistry.name")}`,
      designation: `${t("about.ourMinistries.menMinistry.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Fvarones-ai.webp?alt=media&token=f9c31054-ac51-49e1-9f8b-2e6b67b6814f",
    },
    {
      quote: `${t("about.ourMinistries.danceMinistry.quote")}`,
      name: `${t("about.ourMinistries.danceMinistry.name")}`,
      designation: `${t("about.ourMinistries.danceMinistry.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Fdanza.jpg?alt=media&token=c4c58cc6-5803-47d2-a7b5-8216712fc6f4",
    },
    {
      quote: `${t("about.ourMinistries.youthMinistry.quote")}`,
      name: `${t("about.ourMinistries.youthMinistry.name")}`,
      designation: `${t("about.ourMinistries.youthMinistry.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Fjovenes.jpeg?alt=media&token=4522c84f-335d-4c79-9c48-9c5926145158",
    },
    {
      quote: `${t("about.ourMinistries.chaplainsMinistry.quote")}`,
      name: `${t("about.ourMinistries.chaplainsMinistry.name")}`,
      designation: `${t("about.ourMinistries.chaplainsMinistry.designation")}`,
      src: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fabout-section%2Fministerios%2Fcapellania.jpeg?alt=media&token=b8d98ba6-aeb3-43e4-ae95-12f6c55e2161",
    },
  ];

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="w-full mx-auto py-16">
      <div className="relative h-auto">
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

      <div className="bg-cover bg-center bg-no-repeat bg-pattern bg-black">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 ">
          <div className="px-4 md:px-6 lg:px-8 py-6">
            <Title
              title={t("about.mission.title")}
              fontColor="primary-blue-text"
              bgColor="bg-[black]"
              borderSides="border-[#6dc0ea]"
              tagName="h1"
              pY="py-8"
              shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
            />

            <p className="text-xl font-bold primary-blue-text text-justify bg-[black] lg:p-6leading-relaxed">
              {t("about.mission.description")}
            </p>
          </div>
          <div className="px-4 md:px-6 lg:px-8 py-6">
            <Title
              title={t("about.vision.title")}
              fontColor="primary-blue-text"
              bgColor="bg-[black]"
              borderSides="border-[#6dc0ea]"
              tagName="h1"
              pY="py-8"
              shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
            />
            <p className="text-xl font-bold primary-blue-text text-justify bg-[black] lg:p-6leading-relaxed">
              {t("about.vision.description")}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="px-4 md:px-6 lg:px-8 ">
          {/* <h2 className="text-3xl font-bold mb-8 text-center">
            {t("about.values.title")}
          </h2> */}
          <Title
            title={t("about.values.title")}
            fontColor="primary-blue-text"
            bgColor="bg-[black]"
            borderSides="border-[#6dc0ea]"
            tagName="h1"
            pY="py-8"
            shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
          />
          <section className="pt-6">
            <Featured
              t={t}
              featuredSections={featuredSections}
              translationKeyPrefix="about"
            />
          </section>
        </div>

        {/* Ministries */}
        <div className="px-4 md:px-6 lg:px-8 py-8">
          <Title
            title={t("about.ourMinistries.title")}
            fontColor="primary-blue-text"
            bgColor="bg-[black]"
            borderSides="border-[#6dc0ea]"
            tagName="h1"
            pY=""
            shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
          />
          <section className="pt-6">
            <AnimatedMinistries ministries={ministries} t={t} />
          </section>
        </div>
      </div>
    </div>
  );
}
