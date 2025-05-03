import React from 'react';
import Image from 'next/image';

type FeaturedProps = {
  t: (key: string) => string;
  featuredSections: { image?: string; altImage: string }[];
  translationKeyPrefix: string; // <- NUEVO
};

function Featured({ t, featuredSections, translationKeyPrefix }: FeaturedProps) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 px-4 sm:px-6 lg:px-8">
      {featuredSections.map((section) => (
        <div
          key={section.altImage}
          className="text-center bg-white rounded-lg transition-transform duration-500"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          {section.image && (
            <div className="mx-auto">
              <Image
                src={section.image}
                alt={t(`${translationKeyPrefix}.${section.altImage}.title`)}
                width={200}
                height={200}
                className="mx-auto h-[15rem] w-[15rem] object-contain"
                data-aos="zoom-in-up"
              />
            </div>
          )}
          <div className="px-6 pb-6" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">
              {t(`${translationKeyPrefix}.${section.altImage}.title`)}
            </h2>
            <p className="text-gray-600">
              {t(`${translationKeyPrefix}.${section.altImage}.description`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Featured;
