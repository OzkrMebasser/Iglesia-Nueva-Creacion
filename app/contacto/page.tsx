"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Title from "@/components/ui/Title";
import BlurText from "@/components/ui/BlurText";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setStatusMessage(t("contact.success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatusMessage(t("contact.error"));
    }
  };

  return (
    <div className="w-full mx-auto pt-24 bg-cover bg-center bg-no-repeat bg-pattern bg-black">
      <div className="relative h-auto">
        <div className="pt-10 absolute inset-0 bg-[black] bg-opacity-30 rounded-lg flex items-center justify-center z-10">
          <h1 className="px-4">
            <BlurText
              text={`${t("contact.title")}`}
              delay={300}
              animateBy="words"
              direction="top"
              className="text-3xl mt-0 lg:text-5xl font-black text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none"
            />
          </h1>
        </div>
      </div>

      <div className="w-full mx-auto py-24 md:px-6 lg:px-8 flex justify-center ">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch px-4">
          {/* Formulario */}
          <div
            data-aos="fade-up"
            className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl text-white"
          >
            <Title
              title={t("contact.form-title")}
              fontColor="primary-blue-text"
              bgColor="bg-[black]"
              borderSides="border-[#6dc0ea]"
              tagName="h1"
              pY="py-8"
              shadow="shadow-[1px_2px_44px_-9px_#6dc0ea]"
            />

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("contact.name")}
                title={t("contact.name")}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("contact.email")}
                title={t("contact.email")}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder={t("contact.message")}
                title={t("contact.message")}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative font-inherit text-[1rem] px-[1rem] lg:px-[2.75rem] py-[0.625rem] tracking-[0.06em] rounded-[0.625rem] overflow-hidden transition-all duration-300 border-2 border-[#white] lg:bg-gradient-to-r from-[rgba(109,192,234,0.1)] via-transparent to-[rgba(109,192,234,0.1)] text-[#6dc0ea] shadow-[inset_0_0_10px_rgba(109,192,234,0.4),0_0_9px_3px_rgba(109,192,234,0.1)] hover:text-[#b3e3ff] hover:shadow-[inset_0_0_10px_rgba(109,192,234,0.6),0_0_9px_3px_rgba(109,192,234,0.2)] bg-primary-blue"
            >
              <span className="relative z-10 flex items-center gap-2 text-black font-bold lg">
                {/* Contáctanos */}
                {t("contact.send")}

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute top-0 left-[-6.5rem] w-[6.5rem] h-full bg-gradient-to-r from-transparent via-[rgba(109,192,234,0.1)] to-transparent transition-transform duration-400 ease-in-out group-hover:translate-x-[18rem] sm:via-[rgba(109,192,234,0.3)]"></span>
            </button>

            {/* <button
              type="submit"
              onClick={handleSubmit}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-all font-semibold py-3 rounded-lg shadow-lg shadow-blue-900/40"
            >
              {t("contact.send")}
            </button> */}

            {statusMessage && (
              <p className="text-center mt-4 text-green-300 font-semibold">
                {statusMessage}
              </p>
            )}
          </div>

          {/* Imagen con mismo tamaño del formulario */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full lg:w-1/2 flex h-[615px]"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fcontacto%2Fcontacto-iglesia-nueva-creacion.jpg?alt=media&token=b080ee8a-0c9d-4652-8f94-212881a2a2a3"
              alt="Contact"
              className="w-full h-full rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
