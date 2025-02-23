'use client'

import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#13455f] text-white leaves-bg-white " 
    
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('church.name')}</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />
                {t('footer.address')}
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                {t('footer.phone')}
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                {t('footer.email')}
              </p>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.service_times')}</h3>
            <div className="space-y-2">
              <p>{t('footer.sunday_service')}</p>
              <p>{t('footer.wednesday_service')}</p>
              <p>{t('footer.youth_service')}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.follow_us')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} {t('church.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}