"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Instagram, Youtube, MapPin, Phone, Mail, Church } from "lucide-react";
import { LiaPrayingHandsSolid, LiaBibleSolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { FiFacebook, FiInstagram  } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";


export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="secondary-blue-text bg-white  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.our-info")}</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />{" "}
                <strong>{t("footer.address-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.address")}</p>
              <p className="flex items-center">
                <Phone className="mr-2" size={18} />
                <strong>{t("footer.phone-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.phone")}</p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                <strong>{t("footer.email-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.email")}</p>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.service-times")}
            </h3>
            <div className="space-y-2">
              {/* Sunday Service */}

              <p className="flex items-center">
                <Church className="mr-2" size={20} />{" "}
                <strong>{t("footer.sunday-service-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.sunday-service")}</p>
              {/* Tuesday Service */}
              <p className="flex items-center">
                <LiaPrayingHandsSolid className="mr-2" size={22} />{" "}
                <strong>{t("footer.tuesday-service-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.tuesday-service")}</p>
              {/* Thursday Service */}
              <p className="flex items-center">
                <LiaBibleSolid className="mr-2" size={24} />{" "}
                <strong>{t("footer.thursday-service-title")}</strong>
              </p>
              <p className="flex items-center">
                {t("footer.thursday-service")}
              </p>
              {/* Saturday Service */}
              <p className="flex items-center">
                <GrGroup className="mr-2" size={18} />{" "}
                <strong>{t("footer.saturday-service-title")}</strong>
              </p>
              <p className="flex items-center">{t("footer.youth-service")}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.follow-us")}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[secondary-blue-text] text-center">
          <p>
            © {new Date().getFullYear()} {t("church.name")}.{" "}
            <br className="lg:hidden" />
            {t("footer.rights")}
            <br />
            <a
              href="https://oscarmorenodev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[300] text-[0.8rem] mx-auto ml-3 lg:ml-0"
            >
              {t("footer.made-with")}&#x1F9E1;{t("footer.made-by")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
