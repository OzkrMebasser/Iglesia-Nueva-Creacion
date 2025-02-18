"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";

import Aos from "aos";
import "aos/dist/aos.css";

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
      <div className="bg-cover bg-center bg-no-repeat leaves-bg bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 sm:px-6 lg:px-8">
          {featuredSections.map((section) => (
            <div
              key={section.id}
              className="text-center bg-white rounded-lg "
           data-aos="fade-right"
            
            >
              {section.image && (
                <div className="mx-auto">
                  <Image
                    src={section.image}
                    alt={t(`home.${section.id}.title`)}
                    width={200}
                    height={200}
                    className="mx-auto h-[15rem] w-[15rem] object-contain"
                  />
                </div>
              )}
              <div className="px-6 pb-6">
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
