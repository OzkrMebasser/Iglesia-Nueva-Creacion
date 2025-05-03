"use client";
import Title from "./ui/Title";
import { useTranslation } from "react-i18next";
import { PiVideoFill } from "react-icons/pi";

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
          pY="py-14"
          shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
        />
        <div className="px-4 md:px-6 lg:px-8 mb-6">
          <div className="text-xl mx-auto text-center font-bold bg-transparent lg:p-6">
            <a
              href="https://www.tiktok.com/@oscarmaarquez20/video/7494790202737577224?_r=1&_t=ZM-8vhXoMwXbIz&fbclid=IwY2xjawKA1chleHRuA2FlbQIxMQBicmlkETFTQnV2TXpzdURQRkRNbEpkAR5hX3XweAqy9KVa0ZvJLRaP8K2XxmCby8C4DUapbz1OkAf-kO39zkyLb0W17g_aem_o-5a8tZUYbzEyUXwKp4q7Q"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-[#6dc0ea] hover:text-[#21739e]
               before:content-[''] before:absolute before:bottom-0 before:left-1/2 
               before:w-0 before:h-[1px] before:bg-[#6dc0ea] hover:before:w-1/2 
               hover:before:bg-[#21739e]
               before:transition-all before:duration-700 before:ease-in-out before:origin-center
               after:content-[''] after:absolute after:bottom-0 after:right-1/2 
               after:w-0 after:h-[1px] after:bg-[#6dc0ea] hover:after:w-1/2 
               hover:after:bg-[#21739e]
               after:transition-all after:duration-700 after:ease-in-out after:origin-center"
            >
             {t("home.ourLocationVideo.title")}{" "}
              <PiVideoFill className="h-7 w-7 ml-2 inline text-[#6dc0ea] hover:text-[#21739e]" />
            </a>
          </div>
        </div>
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
