"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { t } = useTranslation();
  // Initialize AOS library

  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);


  return (
    <div>
 
  {/* Hero Section */}
      <HeroBanner />
     
    

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Worship */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.worship.title")}
            </h2>
            <p className="text-gray-600">{t("home.worship.description")}</p>
          </div>

          {/* Community */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.community.title")}
            </h2>
            <p className="text-gray-600">{t("home.community.description")}</p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.mission.title")}
            </h2>
            <p className="text-gray-600">{t("home.mission.description")}</p>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("home.schedule.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["sunday", "wednesday", "youth"].map((day) => (
              <div key={day} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  {t(`home.schedule.${day}.title`)}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t(`home.schedule.${day}.time`)}
                </p>
                <p className="text-gray-600">
                  {t(`home.schedule.${day}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
