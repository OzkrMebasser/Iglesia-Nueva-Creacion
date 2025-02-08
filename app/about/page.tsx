'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092"
          alt="Church Interior"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t('about.title')}
          </h1>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('about.mission.description')}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{t('about.vision.title')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('about.vision.description')}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('about.values.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['faith', 'community', 'service'].map((value) => (
            <div
              key={value}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`about.values.${value}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`about.values.${value}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('about.leadership.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['pastor', 'elder1', 'elder2'].map((leader) => (
            <div
              key={leader}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={t(`about.leadership.${leader}.image`)}
                  alt={t(`about.leadership.${leader}.name`)}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t(`about.leadership.${leader}.name`)}
              </h3>
              <p className="text-gray-600 mb-2">
                {t(`about.leadership.${leader}.role`)}
              </p>
              <p className="text-gray-600">
                {t(`about.leadership.${leader}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}