"use client";
import { useEffect } from "react";
import GridMotion from "@/components/ui/GridMotion";
// import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import BlurText from "@/components/ui/BlurText";
import Featured from "@/components/Featured";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import Title from "@/components/ui/Title";
import FeaturedSections from "@/components/FeaturedHomeSection";

interface AboutClientProps {
  serverImages: string[];
}

interface FeaturedSection {
  altImage: string;
  image: string;
}

const featuredSections: FeaturedSection[] = [

  ///*** FALTA CAMBIAR LAS IMANGESN DE ESTA SECCION */
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

// const testimonials = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: "Sarah Chen",
//     designation: "Product Manager at TechFlow",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: "Michael Rodriguez",
//     designation: "CTO at InnovateSphere",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: "Emily Watson",
//     designation: "Operations Director at CloudScale",
//     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: "James Kim",
//     designation: "Engineering Lead at DataPro",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//     name: "Lisa Thompson",
//     designation: "VP of Technology at FutureNet",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];
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
        {/* <AnimatedTestimonials testimonials={testimonials}/> */}

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
         <Featured
        t={t}
        featuredSections={featuredSections}
        translationKeyPrefix="about"
      />
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div> */}
        </div>

        {/* Leadership */}
        {/* <div className="px-4 md:px-6 lg:px-8 mb-16">
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
        </div> */}
      </div>
    </div>
  );
}
