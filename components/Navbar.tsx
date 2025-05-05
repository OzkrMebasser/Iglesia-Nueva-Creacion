"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

import Image from "next/image";

import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isImageHidden, setIsImageHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsImageHidden(true);
      } else {
        setIsImageHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-[white] text-white shadow-md"
          : "bg-[black]  text-gray-800"
      } fixed top-0 w-full z-[99999] transition-all duration-300 ease-in-out `}
    >
      {/* // <nav className="bg-white shadow-lg"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span
              className={`bg-[#000000] p-2 rounded-full mr-2   ${
                isImageHidden
                  ? "transition-all duration-1000 ease-in-out blur-0"
                  : "hidden blur-md"
              }`}
            >
              <Image
                className="h-8 w-8 inline  scale-x-100 transition-all duration-1000 ease-in-out "
                width="100"
                height="100"
                src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fpaloma-clearbg.png?alt=media&token=8bcd4a7d-c403-43a6-b65e-27d2ce1d2b43"
                alt="Logo paloma"
              />
            </span>
            <Link
              href="/"
              className={`${isScrolled ? "text-[#21739e]" : "text-[#6dc0ea]"} ${
                dancingScript.variable
              } font-dancing-script text-2xl font-bold`}
            >
              {t("church.name")}
            </Link>
            <span
              className={`shadow-[inset_1px_2px_44px_0px_#6dc0ea] rounded-full p-2  ml-2 ${
                isImageHidden
                  ? "-translate-x-32 opacity-0 scale-50 blur-md"
                  : "translate-x-0 opacity-100 scale-100 blur-0 "
              }`}
            >
              <Image
                width="100"
                height="100"
                className="h-8 w-8 inline -scale-x-100 transition-all duration-1000 ease-in-out "
                src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fpaloma-clearbg.png?alt=media&token=8bcd4a7d-c403-43a6-b65e-27d2ce1d2b43"
                alt="Logo paloma"
              />
            </span>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative cursor-pointer transition-all ease-in-out 
             ${
               pathname === link.href
                 ? "text-lg font-bold before:w-[50%] after:w-[50%]"
                 : "text-base before:w-0 after:w-0"
             } 
             ${
               isScrolled
                 ? "text-[#21739e] hover:text-[#6dc0ea] before:bg-[#21739e] after:bg-[#21739e]"
                 : "text-[#6dc0ea] hover:text-[#21739e] before:bg-[#6dc0ea] after:bg-[#6dc0ea]"
             } 
             before:transition-[width] before:ease-in-out before:duration-700 
             before:absolute before:origin-center before:h-[1px] before:bottom-0 before:left-[50%] 
             after:transition-[width] after:ease-in-out after:duration-700 
             after:absolute after:origin-center after:h-[1px] after:bottom-0 after:right-[50%]`}
              >
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                // className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"

                className={`flex items-center space-x-2   ${
                  isScrolled
                    ? "text-[#21739e] hover:text-[#6dc0ea] before:bg-[#21739e] after:bg-[#21739e]"
                    : "text-[#6dc0ea] hover:text-[#21739e] before:bg-[#6dc0ea] after:bg-[#6dc0ea]"
                } `}
              >
                <Globe size={20} />
                <span>{i18n.language.toUpperCase()}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <button
                    onClick={() => toggleLanguage("en")}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#21739e] hover:text-white w-full text-left"
                  >
                    <ReactCountryFlag
                      countryCode="US"
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    English
                  </button>
                  <button
                    onClick={() => toggleLanguage("es")}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#21739e] hover:text-white w-full text-left"
                  >
                    <ReactCountryFlag
                      countryCode="MX"
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    Español
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#21739e]  hover:text-[#6dc0ea]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 rounded-md transition-all duration-300",
                pathname === link.href ? "font-bold" : "",
                isScrolled
                  ? "text-[#21739e] hover:bg-[#6dc0ea] hover:text-white"
                  : "text-[#6dc0ea] hover:bg-[#21739e] hover:text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="px-3 py-2">
            <button
              onClick={() => {
                toggleLanguage("en");
                setIsOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-all duration-300",
                isScrolled
                  ? "text-[#21739e] hover:bg-[#6dc0ea] hover:text-white"
                  : "text-[#6dc0ea] hover:bg-[#21739e] hover:text-white"
              )}
            >
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              English
            </button>
            <button
              onClick={() => {
                toggleLanguage("es");
                setIsOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-all duration-300",
                isScrolled
                  ? "text-[#21739e] hover:bg-[#6dc0ea] hover:text-white"
                  : "text-[#6dc0ea] hover:bg-[#21739e] hover:text-white"
              )}
            >
              <ReactCountryFlag
                countryCode="MX"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              Español
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
