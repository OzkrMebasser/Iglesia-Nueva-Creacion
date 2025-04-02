import React from "react";
import { FaChurch, FaPrayingHands, FaBookOpen, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Title from "./Title";

const ServicesDays = () => {
  const { t } = useTranslation();

  const schedule = [
    { key: "sunday", icon: FaChurch },
    { key: "tuesday", icon: FaPrayingHands },
    { key: "thursday", icon: FaBookOpen },
    { key: "saturday", icon: FaUsers },
  ];

  return (
    <>
      <section>
        <Title
          title={t("home.schedule.title")}
          fontColor="primary-blue-text"
          bgColor="bg-[transparent]"
          borderSides="border-[#7c7b7b7e]"
          tagName="h1"
          pY="py-16"
        />
        {/* Weekly Schedule */}

        <div className="bg-white pb-16 bg-cover bg-center bg-no-repeat ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {schedule.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="rounded-lg group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10"
                >
                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#21739e] transition-all duration-300 group-hover:scale-[10]"></span>
                  <div className="relative z-10 mx-auto max-w-md">
                    <span className=" grid h-20 w-20 place-items-center rounded-full bg-[#000000]  transition-all duration-300 group-hover:bg-[#ffffff] ">
                      <Icon className="h-10 w-10 text-[#6dc0ea] group-hover:text-[#000000] transition-all " />
                    </span>
                    <div className="space-y-3 pt-5 text-center text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h3 className="text-xl font-bold mb-2">
                        {t(`home.schedule.${key}.title`)}
                      </h3>
                      <p className="font-semibold text-lg">
                        {t(`home.schedule.${key}.day`)}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {t(`home.schedule.${key}.time`)}
                      </p>
                      <p className="text-gray-600">
                        {t(`home.schedule.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDays;
