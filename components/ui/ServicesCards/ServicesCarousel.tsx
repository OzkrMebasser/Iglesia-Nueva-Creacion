// Gallery.tsx
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";




const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const frames = [
    {
      title: t("home.schedule.sunday.title"),
      day: t("home.schedule.sunday.day"),
      time: t("home.schedule.sunday.time"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fservicios-page%2Fservicio-general.jpg?alt=media&token=d2663e1c-e680-4f5a-b07a-e013395ac1ea",
      description: t("home.schedule.sunday.description"),
    },
    {
      title: t("home.schedule.tuesday.title"),
      day: t("home.schedule.tuesday.day"),
      time: t("home.schedule.tuesday.time"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fservicios-page%2Foracion.jpg?alt=media&token=85b82839-5e1e-411d-9ac6-2a13b6cf868f",
      description: t("home.schedule.tuesday.description"),
    },
    {
      title: t("home.schedule.thursday.title"),
      day: t("home.schedule.thursday.day"),
      time: t("home.schedule.thursday.time"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fservicios-page%2Festudio-biblico.jpg?alt=media&token=b164a3f2-fd28-4016-af1f-32c3dc723799",
      description: t("home.schedule.thursday.description"),
    },
    {
      title: t("home.schedule.saturday.title"),
      day: t("home.schedule.saturday.day"),
      time: t("home.schedule.saturday.time"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fservicios-page%2Fjovenes.jpeg?alt=media&token=23181fa4-04e2-445b-957e-cebd3a202e36",
      description: t("home.schedule.saturday.description"),
    },
  ];

  const maxIndex = frames.length - 1;

  const goTo = (i: number | "end") => {
    const newIndex = i === "end" ? maxIndex : i;
    setIndex(newIndex);
  };

  const next = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [next, prev]);

  

  return (
    <div className="text-center px-4 bg-transparent">
      {/* Gallery Container */}
      <div className="shadow-[1px_2px_44px_-9px_#6dc0ea] rounded-lg mx-auto bg-transparent max-w-4xl  overflow-hidden relative">
        {/* Content Area */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out h-[32rem] lg:h-[28rem]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {frames.map((frame, i) => (
              <div
                key={i}
                className="w-full flex-none h-full flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[15rem] md:h-auto">
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Text Section */}
                {/* <div className="w-full md:w-1/2 p-6 bg-[#000000b6] flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold mb-2 text-white">{frame.title}</h2>
                  <p className="text-gray-500 mb-4">{frame.day}</p>
                  <p className="text-gray-500 mb-4">{frame.time}</p>
                  <p className="text-gray-700 mb-4">{frame.description}</p>
                </div> */}
                <motion.div
                className="w-full md:w-1/2 p-6 bg-[#000000b6] flex flex-col justify-center items-center"
            key={i}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold  text-white">
              {frame.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {frame.day}
            </p>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {frame.time}
            </p>
            <motion.p className="text-lg text-[#e7e7e7] mt-6 dark:text-neutral-300">
              {frame.description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Flechas posicionadas absolutamente */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
          aria-label="Previous"
        >
          <IconArrowLeft className="h-5 w-5 text-black dark:text-white" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
          aria-label="Next"
        >
          <IconArrowRight className="h-5 w-5 text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;