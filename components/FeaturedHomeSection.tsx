import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import { useTranslation } from "react-i18next";
import Featured from "./Featured";

interface FeaturedSection {
  altImage: string;
  image: string;
}

const featuredSections: FeaturedSection[] = [
  {
    altImage: "worship",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fadoracion-iglesia-nueva-creacion.png?alt=media&token=026709b5-4435-4eb5-b6e2-a6fdd334b670",
  },
  {
    altImage: "community",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fcomunidad-iglesia-nueva-creacion.png?alt=media&token=f3db9223-95af-44a8-a1a5-cdf0bdd04d13",
  },
  {
    altImage: "mission",
    image:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fmision-iglesia-nueva-creacion.png?alt=media&token=53cea544-7389-434a-94fb-246066e4d6ac",
  },
];

const FeaturedHomeSection = ({}) => {
  const { t } = useTranslation();

  return (
    <div className=" mx-auto bg-black  bg-pattern bg-cover bg-center bg-no-repeat ">
      <Title
        title={t("home.live-your-faith.title")}
        fontColor="primary-blue-text"
        bgColor="bg-[black]"
        borderSides="border-[#6dc0ea]"
        tagName="h1"
        pY="py-16"
        shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
      />

      <Featured
        t={t}
        featuredSections={featuredSections}
        translationKeyPrefix="home"
      />
    </div>
  );
};

export default FeaturedHomeSection;
