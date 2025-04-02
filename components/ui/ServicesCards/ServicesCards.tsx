import React, { useState, useEffect } from "react";
import { FaChurch, FaPrayingHands, FaBookOpen, FaUsers } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";

import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../../app/globals.css";

// Import required modules
import { EffectCards } from "swiper/modules";
import Title from "../Title";

export default function ServicesCards() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0); // Estado para rastrear el índice activo
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-cards");
      if (element) {
        const rect = element.getBoundingClientRect();
        const threshold = window.innerWidth < 768 ? 600 : 550; // 200px en móviles, 350px en pantallas grandes
        setScrolled(rect.top <= threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const schedule = [
    { key: "sunday", icon: FaChurch },
    { key: "tuesday", icon: FaPrayingHands },
    { key: "thursday", icon: FaBookOpen },
    { key: "saturday", icon: FaUsers },
  ];

  return (
    <div className="relative bg-black px-4 sm:px-6 lg:px-8 pb-16">
      {/* Fondo invertido */}
      <div className="absolute inset-0 bg-pattern bg-cover bg-center bg-no-repeat bg-pattern lg:scale-y-[-1]"></div>

      {/* Contenido con z-index para que no se invierta */}
      <div className="relative z-10">
        <Title
          title={t("home.weekly-schedule.title")}
          fontColor="primary-blue-text"
          bgColor="bg-[black]"
          borderSides="border-[#6dc0ea]"
          tagName="h1"
          pY="py-16"
          shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]
"
        />

        <div className="flex flex-col md:flex-row">
          {/* Swiper con las tarjetas */}
          <div
            id="services-cards"
            data-aos="zoom-in-up"
            className=" w-full md:w-1/2"
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper swiper-app "
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {schedule.map(({ key, icon: Icon }, index) => (
                <SwiperSlide key={key}>
                  <div className="border border-[gray] h-[355px] rounded-lg group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-8 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-6">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-[30%] bg-[#21739e] transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-[30%] bg-[#000000] transition-all duration-300 group-hover:bg-[#ffffff]">
                        <Icon className="h-10 w-10 primary-blue-text group-hover:text-[#000000] transition-all" />
                      </span>
                      <div className="space-y-3 pt-5 text-center text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <h3 className="text-lg lg:text-xl font-bold mb-2">
                          {t(`home.schedule.${key}.title`)}
                        </h3>
                        <p className="font-semibold text-lg">
                          {t(`home.schedule.${key}.day`)}
                        </p>
                        <p className=" mb-2">
                          {t(`home.schedule.${key}.time`)}
                        </p>
                      </div>
                    </div>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <MdSwipe className=" text-[#afafaf88] group-hover:text-white/90 h-8 w-8" />
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full md:w-1/2 py-8 flex items-center justify-center px-8 lg:pr-24">
            <h3 className="text-2xl font-bold primary-blue-text text-justify bg-[black] lg:p-6">
              {t(`home.schedule.${schedule[activeIndex].key}.description`)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
