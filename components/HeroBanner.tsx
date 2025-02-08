"use client"
import { useEffect, useState } from "react";

import Link from "next/link";
import "@/app/globals.css";
// import { IoIosArrowDroprightCircle } from "react-icons/io";


const HeroBanner = () => {


    useEffect(() => {
        const AOS = require("aos");
        AOS.init();
    }, []);
    
 
  return (
    <section className="bg-[black] h-[auto]">
      <div className="lg:px-8 mx-auto">
        <div className="flex items-center h-full lg:relative lg:-space-x-24">
          <div className="text-white flex-1 absolute lg:relative z-10 pl-6 lg:pl-0">
            <h1
              className="text-4xl text-white mb-8 "
              data-aos="fade-down"
              data-aos-delay="500">
              <span className="block text-shadow">Bienvenidos a</span>
              <span className='shining text-[#2b69a3] font-black green-text-shadow'>
              Iglesia Nueva Creación</span> 
                
                <span className="block text-shadow">en Calafia, La Paz, BCS</span>
    
            
            </h1>
            <p
              className="subtitle max-w-[415px] text-body-md lg:text-body-lg mb-8 text-shadow"
              data-aos="fade-down"
              data-aos-delay="600">
            Un hogar para quienes buscan esperanza, restauración y un propósito en Dios.
            </p>
            <button
              className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-6 border-[1.5px] border-white bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              data-aos="fade-down"
              data-aos-delay="700">
              <Link href="/contact">Conócenos</Link>
              {/* <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" /> */}
            </button>
          </div>
          <div className=" bg-[black] h-[72.4vh] lg:h-[100vh] w-full bg-banner bg-contain bg-center bg-no-repeat lg:bg-cover flex-1  lg:mt-0" data-aos="fade-right" data-aos-delay="900"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
