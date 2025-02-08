'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1510380290192-70877d4610d8"
          alt="Worship Service"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t('services.title')}
          </h1>
        </div>
      </div>

      {/* Weekly Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('services.weekly.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['sunday', 'wednesday', 'youth'].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`services.weekly.${service}.title`)}
              </h3>
              <p className="text-gray-600 mb-2">
                {t(`services.weekly.${service}.time`)}
              </p>
              <p className="text-gray-600">
                {t(`services.weekly.${service}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('services.events.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['christmas', 'easter', 'retreat', 'conference'].map((event) => (
            <div
              key={event}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`services.events.${event}.title`)}
              </h3>
              <p className="text-gray-600 mb-2">
                {t(`services.events.${event}.date`)}
              </p>
              <p className="text-gray-600">
                {t(`services.events.${event}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ministries */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('services.ministries.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['children', 'youth', 'women', 'men', 'missions', 'worship'].map((ministry) => (
            <div
              key={ministry}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`services.ministries.${ministry}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`services.ministries.${ministry}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}