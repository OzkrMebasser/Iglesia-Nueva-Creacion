"use client";
import { useEffect, useState } from "react";
import BlurText from "@/components/ui/BlurText";
import { Dancing_Script } from "next/font/google";
import RotatingText from "@/components/ui/RotatingText";
import { ArrowRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

import "@/app/globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const HeroBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    // const AOS = require("aos");
    // Aos.init();
    // AOS.init();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <section
        className="bg-[#000000] h-[auto] "
        data-aos-delay="400"
        data-aos-duration="3000"
      >
        <div className="lg:pl-8 mx-auto">
          <div className="flex items-center h-full lg:relative lg:-space-x-24">
            <div className=" flex-1 absolute lg:relative z-10 pl-6 lg:pl-0">
              <h1 className=" mt-[22rem] lg:mt-[4rem] ">
                <BlurText
                  text="¡Bienvenidos!"
                  delay={15500}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl mt-0 lg:text-5xl font-black text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none"
                />
              </h1>
              <div
                className=" lg:mt-6 text-[1.2rem] lg:text-4xl font-black  "
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <span className="text-[white] [text-shadow:_2px_3px_9px_#000000]">
                  {" "}
                  Aqui encontrarás
                </span>
                <span className="relative inline-block ml-1">
                  <RotatingText
                    texts={[
                      "fe",
                      "paz",
                      "libertad",
                      "esperanza",
                      "nueva vida",
                      "restauración",
                      "el amor de Dios",
                    ]}
                    mainClassName="text-[#21739e] w-full mx-auto overflow-hidden  bg-white p-[5px] rounded-lg shadow-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </div>

              <div className="relative inline-block mt-6" data-aos="fade-up">
                <Link
                  href="https://wa.me/526121347548"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group relative font-inherit text-[1rem] px-[1rem] lg:px-[2.75rem] py-[0.625rem] tracking-[0.06em] rounded-[0.625rem] overflow-hidden transition-all duration-300 border-2 border-[#white] bg-gradient-to-r from-[rgba(109,192,234,0.1)] via-transparent to-[rgba(109,192,234,0.1)] text-[#6dc0ea] shadow-[inset_0_0_10px_rgba(109,192,234,0.4),0_0_9px_3px_rgba(109,192,234,0.1)] hover:text-[#b3e3ff] hover:shadow-[inset_0_0_10px_rgba(109,192,234,0.6),0_0_9px_3px_rgba(109,192,234,0.2)] sm:bg-[rgba(109,192,234,0.3)]">
                    <span className="relative z-10 flex items-center gap-2 text-white font-bold lg">
                      Contáctanos!
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute top-0 left-[-6.5rem] w-[6.5rem] h-full bg-gradient-to-r from-transparent via-[rgba(109,192,234,0.1)] to-transparent transition-transform duration-400 ease-in-out group-hover:translate-x-[18rem] sm:via-[rgba(109,192,234,0.3)]"></span>
                  </button>
                </Link>
              </div>
            </div>
            {/* {"esta seccion me refiero"} */}
            <div
              className="bg-[#000000] h-[80vh] lg:h-[100vh] w-full bg-banner-mobile lg:bg-banner-lg flex-1 mt-[3.95rem]  lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="900"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
