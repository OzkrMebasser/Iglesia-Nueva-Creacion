import { useState } from "react";
import BlurText from "@/components/ui/BlurText";

interface TitleProps {
  title: string;
  fontColor: string;
  bgColor: string;
  borderSides: string;
  pY: string;
  tagName: string;
  shadow: string;
}
const Title = ({
  title,
  fontColor,
  bgColor,
  borderSides,
  pY,
  tagName,
  shadow,

}: TitleProps) => {
 

  return (
    <section className={`mx-auto text-center ${pY}`} >
      {tagName === "h1" ? (
        <h1
          className={` ${shadow} ${fontColor} ${bgColor}  border-2 rounded-lg ${borderSides}  border-b-[#21739e]  text-2xl lg:text-4xl font-black  w-auto inline-block py-3 px-2  `}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`${fontColor} ${bgColor}  border-2 rounded-lg ${borderSides}  border-b-[#21739e]  text-xl lg:text-2xl font-black  w-auto inline-block py-3 px-2  `}
        >
          {title}
        </h2>
      )}
    </section>
  );
};

export default Title;
