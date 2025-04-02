"use client";
import Title from "./ui/Title";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" mx-auto bg-black  pb-16 bg-pattern bg-cover bg-center bg-no-repeat ">
        <Title
          title={t("home.our-location.title")}
          fontColor="primary-blue-text"
          bgColor="bg-[black]"
          borderSides="border-[#6dc0ea]"
          tagName="h1"
          pY="py-16"
          shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
        />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116635.70616742545!2d-110.30668720248099!3d24.00051496441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afcd0070e56f57%3A0xa92dbcb80b872e0d!2sIglesia%20Nueva%20Creaci%C3%B3n!5e0!3m2!1ses!2sus!4v1742874213504!5m2!1ses!2sus"
          className="border-0 w-full h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Map;
