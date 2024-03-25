"use client"
import React, { useState, useEffect } from "react";
import LOGO from "@/public/mic.png";
import Open from "@/public/open.svg";
import AOS from "aos";
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
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="flex w-full h-fit">
      <div className="w-full h-fit" style={{ background: "linear-gradient(117deg, rgb(206, 234, 241), rgb(237, 248, 247) 53%, rgb(148, 198, 196))" }}>
        {/* nav bar */}
        <div className="flex">
          <div className="flex lg:flex-row flex-col items-center justify-between w-[90%] mt-5">
            <div className="flex flex-row">
              <img src={LOGO.src} alt="" className="h-12 lg:w-80 w-64 xl:ml-56" />
              <img src={Open.src} className="h-10 w-10 fixed right-2 lg:hidden" onClick={toggleNavbar} />
            </div>
            <div className="flex">
              <ul className={`flex lg:flex-row flex-col lg:space-x-10 lg:mt-0 mt-15 h-[107%] w-full lg:relative absolute left-0 items-center  lg:text-black text-slate-100 lg:bg-transparent cursor-pointer bg-black/80 z-10 lg:-translate-x-0 ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>
                <li className="lg:mt-0 mt-20">Home</li>
                <li className="lg:mt-0 mt-20">About</li>
                <li className="lg:mt-0 mt-20">Events</li>
                <li className="lg:mt-0 mt-20 lg:text-black ">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        {/* nav bar ends */}
        {/* headings - hero section */}
        <div className="grid sm:grid-cols-3 sm:grid-rows-1 justify-items-center items-center mt-12 md:mt-20 lg:mt-0 sm:mt-0">
          <div className="sm:col-span-2 sm:row-span-2 ">
            <h1 className="text-5xl sm:text-7xl font-bold text-black drop-shadow-heading">Together We learn,</h1>
            <h1 className="mt-10 text-5xl sm:text-7xl font-bold drop-shadow-heading">Together We grow.</h1>
            <p className="mt-10 text-xl">Engaging with the student community in innovative ways!</p>
            <button className="flex mb-10 items-center justify-center w-40 h-12 rounded-3xl bg-blue-600 mt-7 text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">About us</button>
          </div>
          <div className="sm:col-span-1 sm:row-span-1 mb-20">
            <img src={Windows.src} alt="" />
          </div>
        </div>
        {/* hero section ends */}
      </div>
    </div>
  );
}

