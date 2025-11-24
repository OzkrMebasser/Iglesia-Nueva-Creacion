"use client";
import { useState } from "react";
import Title from "./ui/Title";
import { useTranslation } from "react-i18next";
import { PiVideoFill, PiX } from "react-icons/pi";

const Map = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="mx-auto bg-black pb-16 bg-pattern bg-cover bg-center bg-no-repeat">
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
            <div
              onClick={toggleModal}
              className="relative inline-block text-[#6dc0ea] hover:text-[#21739e] cursor-pointer
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
            </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-md w-[90%] max-w-xl">
            <button
              onClick={toggleModal}
              title="Close modal"
              className="absolute bottom-5 right-5 p-3 text-red-600 text-2xl font-bold z-50 bg-[#ffffff] rounded-full  hover:bg-red-100 transition duration-300 ease-in-out"
            >
              <PiX className="h-7 w-7 inline " />
            </button>
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/IjrPIHxpOh4?si=V-k0VxHYORy3QXs4"
                title="Video de ubicación"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
