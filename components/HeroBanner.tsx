"use client";
import { useEffect, useState } from "react";
import BlurText from "@/components/ui/BlurText";
import { Dancing_Script } from "next/font/google";
import RotatingText from "@/components/ui/RotatingText";

import Link from "next/link";
import "@/app/globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const HeroBanner = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <section
        className="bg-[black] h-[auto]"
        data-aos-delay="400"
        data-aos-duration="2500"
      >
        <div className="lg:pl-8 mx-auto">
          <div className="flex items-center h-full lg:relative lg:-space-x-24">
            <div className=" flex-1 absolute lg:relative z-10 pl-6 lg:pl-0">
              <h1
                className="mb-8 mt-[16rem] lg:mt-[4rem] "
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <BlurText
                  text="¡Bienvenidos!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl mb-8 mt-0 lg:text-5xl font-bold text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none"
                />
                {/* <span className="block text-2xl lg:text-5xl font-bold text-white [text-shadow:_2px_3px_9px_#000000] lg:text-shadow-none">
                  ¡Bienvenidos!
                </span> */}
              </h1>
              <p
                className="mt-10 lg:mt-24  text-[white] [text-shadow:_2px_3px_9px_#000000] font-black "
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <span className="">
                  {" "}
                  Aqui encontrarás
                  <RotatingText
                    texts={[
                      "el amor de Dios",
                      "restauración",
                      "libertad",
                      "paz",
                      "fe",
                      "esperanza",
                    ]}
                    mainClassName="w-[150px] ml-[8.9rem] mx-auto -mt-[1.6rem] lg:-mt-8 text-white  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-left rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  {/* <RotatingCubeText /> */}
                </span>
              </p>

              <button
                className="hidden lg:block shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-6 border-[1.5px] border-white bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                <Link href="/contact">Conócenos</Link>
              </button>
            </div>
            <div
              className=" bg-[black] h-[72.4vh] lg:h-[100vh] w-full bg-banner bg-contain bg-center bg-no-repeat lg:bg-cover flex-1  lg:mt-0"
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
