"use client"
import React, { useState, useEffect } from "react";
import LOGO from "@/public/mic.png";
import Open from "@/public/open.svg";
import AOS from "aos";
import Hamburger from 'hamburger-react';
import Windows from "@/public/trial.png";
import "./page.css";

import 'aos/dist/aos.css';

export default function Home() {
  const [isopen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isopen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex w-full h-fit">
      <div className="w-full h-fit" style={{ background: "linear-gradient(117deg, rgb(206, 234, 241), rgb(237, 248, 247) 53%, rgb(148, 198, 196))" }}>
        {/* nav bar */}
        <div className="flex lg:flex-row flex-col justify-between w-[99%] lg:w-[90%] mt-4">
          <div className="flex justify-between items-center">
            <img src={LOGO.src} alt="" className="lg:h-12 lg:w-80 w-60 h-9 ml-2 md:ml-7 xl:ml-56" />
            {/* <img src={Open.src} className="h-10 w-10 lg:hidden" onClick={toggleNavbar} /> */}
            <div className="h-12 w-12 lg:hidden font-normal" >
              <Hamburger onToggle={toggleNavbar} size={26} />
            </div>
          </div>
          <div className="flex lg:items-center">
            <ul className={`flex lg:flex-row flex-col lg:space-x-10 lg:mt-0 mt-15 lg:text-xl lg:font-semibold lg:h-0 h-[100vh] w-full lg:relative absolute left-0 items-center  lg:text-black text-slate-100 lg:bg-transparent cursor-pointer bg-black/80 z-10 lg:-translate-x-0 ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>
              <li className="lg:mt-0 mt-20">Home</li>
              <li className="lg:mt-0 mt-20">About</li>
              <li className="lg:mt-0 mt-20">Events</li>
              <li className="lg:mt-0 mt-20 lg:text-black ">Contact</li>
            </ul>
          </div>
        </div>
        {/* nav bar ends */}
        {/* headings - hero section */}
        <div className="grid lg:grid-cols-3 grid-rows-1 justify-items-center items-center mt-12 md:mt-20 lg:mt-28 xl:mt-0 sm:mt-0">
          <div className="lg:col-span-2 row-span-2 ">
            <h1 className="text-4xl ml-5 sm:text-7xl font-bold text-black drop-shadow-heading" data-aos="slide-right">Together We learn,</h1>
            <h1 className="mt-10 text-4xl ml-5  sm:text-7xl font-bold drop-shadow-heading" data-aos="slide-right" data-aos-duration="1300">Together We grow.</h1>
            <p className="mt-10 text-xl ml-5" data-aos="slide-right" data-aos-duration="1600">Engaging with the student community in innovative ways!</p>
            <button className="flex mb-10 ml-5 items-center justify-center w-40 h-12 rounded-3xl bg-blue-600 mt-7 text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">About us</button>
          </div>
          <div className="sm:col-span-1 sm:row-span-1 mb-20">
            <img
              src={Windows.src}
              alt=""
              className="aos-init"
              data-aos="fade-in"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
        {/* hero section ends */}
      </div>
    </div>
  );
}

