import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import { useTranslation } from "react-i18next";

interface FeaturedSection {
  id: string;
  image: string;
}

const featuredSections: FeaturedSection[] = [
  {
    id: "worship",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fadoracion-iglesia-nueva-creacion.png?alt=media&token=026709b5-4435-4eb5-b6e2-a6fdd334b670",
  },
  {
    id: "community",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fcomunidad-iglesia-nueva-creacion.png?alt=media&token=f3db9223-95af-44a8-a1a5-cdf0bdd04d13",
  },
  {
    id: "mission",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fmision-iglesia-nueva-creacion.png?alt=media&token=53cea544-7389-434a-94fb-246066e4d6ac",
  },
];

const FeaturedSections = () => {
  const { t } = useTranslation();

  return (
    <div className=" mx-auto bg-black  pb-16 bg-pattern bg-cover bg-center bg-no-repeat ">
      <Title
        title={t("home.live-your-faith.title")}
        fontColor="primary-blue-text"
        bgColor="bg-[black]"
        borderSides="border-[#6dc0ea]"
        tagName="h1"
        pY="py-16"
        shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 px-4 sm:px-6 lg:px-8">
        {featuredSections.map((section) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            key={section.id}
            className={`text-center bg-white rounded-lg transition-transform duration-500 
                      }`}
          >
            {section.image && (
              <div className="mx-auto">
                <Image
                  src={section.image}
                  alt={t(`home.${section.id}.title`)}
                  width={200}
                  height={200}
                  className="mx-auto h-[15rem] w-[15rem] object-contain"
                  data-aos="zoom-in-up"
                />
              </div>
            )}
            <div className="px-6 pb-6" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4">
                {t(`home.${section.id}.title`)}
              </h2>
              <p className="text-gray-600">
                {t(`home.${section.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSections;
