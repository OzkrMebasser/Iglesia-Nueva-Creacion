import React from "react";
import BlurText from "@/components/ui/BlurText";

interface TitleProps {
  title: string;
  fontColor: string;
}
const Title = ({ title, fontColor }: TitleProps) => {

  return (
    <section className=" mx-auto text-center py-6  ">
     
      <h1 className={`${fontColor} border-2 rounded-lg border-[#42424246] border-b-[#21739e]  text-3xl lg:text-5xl font-black bg-[white] w-auto inline-block p-4  `}>
        {title}
      </h1>
 
     
    </section>
  );
};

export default Title;
