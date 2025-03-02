import React from "react";
import BlurText from "@/components/ui/BlurText";

interface TitleProps {
  title: string;
  fontColor: string;
  bgColor: string;
  borderSides: string;
}
const Title = ({ title, fontColor, bgColor, borderSides }: TitleProps) => {

  return (
    <section className=" mx-auto text-center py-6  ">
     
      <h1 className={`${fontColor} ${bgColor}  border-2 rounded-lg ${borderSides}  border-b-[#21739e]  text-2xl lg:text-4xl font-black  w-auto inline-block py-3 px-2  `}>
        {title}
      </h1>
 
     
    </section>
  );
};

export default Title;
