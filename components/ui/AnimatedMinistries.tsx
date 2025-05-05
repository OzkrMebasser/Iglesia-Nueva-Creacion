"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedMinistries = ({
  ministries,
  autoplay = false,
}: {
  ministries: Testimonial[];
  autoplay?: boolean;
  t: any;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % ministries.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + ministries.length) % ministries.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl lg:max-w-5xl mx-auto antialiased font-sans px-6 md:px-8 lg:px-12 py-2 lg:py-20 bg-[#000000be]">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:gap-[10rem] ">
        <div>
          <div className="relative h-80 lg:h-[23rem] w-full ">
            <AnimatePresence>
              {ministries.map((ministry, index) => (
                <motion.div
                  key={ministry.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : ministries.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={ministry.src}
                    alt={ministry.name}
                    width={100}
                    height={100}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center "
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-8 ">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold  text-white">
              {ministries[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {ministries[active].designation}
            </p>
            <motion.p className="text-lg text-[#e7e7e7] mt-6 dark:text-neutral-300">
              {ministries[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-20 mx-auto pt-8 md:pt-0">
            <button
              type="button"
              title="Previous"
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
            </button>
            <button
              type="button"
              title="Next"
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
