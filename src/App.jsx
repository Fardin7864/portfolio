import WaveAnimation from "./components/Wave/Wave";
import Navbar from "./components/Navbar/Navbar";
import { FaHandsClapping } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Name from "./components/Name/Name";
import react from "../src/assets/react.svg";
import javascript from "../src/assets/javascript.svg";
import html from "../src/assets/html.svg";
import css from "../src/assets/css.svg";
import tailwind from "../src/assets/tailwind.svg";
import mongodb from "../src/assets/mongodb.png";
import express from "../src/assets/express.svg";
import nextjs from "../src/assets/nextjs.svg";
import node from "../src/assets/node.svg";
import mui from "../src/assets/mui.png";
import mongoose from "../src/assets/mongoose.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const navlink = (
    <>
      <li className=" btn bg-transparent border-none text-p navLink" onClick={() => handleNavClick("home")}>Home</li>
      <li className=" btn bg-transparent border-none text-p navLink" onClick={() => handleNavClick("projects")}>Projects</li>
      <li className=" btn bg-transparent border-none text-p navLink" onClick={() => handleNavClick("about")}>About</li>
      <li className=" btn bg-transparent border-none text-p navLink" onClick={() => handleNavClick("contact")}>Contact</li>
    </>
  );

  const buttons = (
    <>
      <button className=" text-2xl">
        <a href="https://www.linkedin.com/in/fardinhasan/" target="_blank">
          <FaLinkedin />
        </a>
      </button>
      <button className=" text-2xl">
        <a href="https://github.com/Fardin7864" target="_blank">
          <FaGithub />
        </a>
      </button>
    </>
  );

  return (
    <div className=" bg-blue-800">
      <WaveAnimation />
      <div className="navbar fixed top-0 z-50">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost z-10 text-white font-roboto text-2xl">
            Fardin Hasan
          </a>
        </div>
        <div className="navbar-center hidden lg:flex z-10 ">
          <ul className="menu menu-horizontal px-1 gap-5 text-white">
            {navlink}
          </ul>
        </div>
      </div>
      <div className=" mt-28">
      <section id="home" className={activeSection === 'home' ? 'active' : ''}>
      <div className=" z-30 relative w-full mx-auto">
        <div className=" relative top-16 z-40 flex justify-center gap-8">
          <div className=" w-1/2 ">
            <h1 className=" text-3xl font-extrabold text-blue-900">
              Hi,
              <br />
              <span className=" text-[#FFEED9] text-4xl clear-left flex gap-5">
                <span className=" text-3xl text-[#E0F4FF]">I'm </span>{" "}
                <Name speed="100" message="Fardin Hasan" />
              </span>
              {/* <Name/> */}
            </h1>

            <h2 className=" mt-4 font-extrabold text-4xl text-white flex gap-5">
              Front-End{" "}
              <span className=" flex gap-3 items-center ">
                {" "}
                Developer <FaHandsClapping className="text-[#FFEED9]" />
              </span>
            </h2>
            <p className=" mt-4 text-[#FFEED9] z-40">
              <Name
                speed="0"
                message={`Hello, this is Fardin Code Ninja with a MERN of Steel! 🚀 Crafting web magic with MongoDB, Express, React, and Node.js. Turning caffeine into code and bugs into features. Let's create websites that are so good, even my coffee gets jealous! ☕💻`}
              />
              <span className=" flex gap-4 mt-3 w-1/2 justify-center ">
                {buttons}
              </span>
            </p>
          </div>
          <div className=" hero-img"></div>
        </div>
        <div className=" mt-24 w-full flex justify-center items-center gap-14">
          <h4 className=" text-2xl font-medium text-p flex gap-9">
            Tech Stack <span>|</span>
          </h4>
          <div className=" flex items-center justify-center gap-4">
            <img src={html} alt="" className=" w-10 h-10" />
            <img src={css} alt="" className=" w-10 h-10" />
            <img src={javascript} alt="" className=" w-10 h-10" />
            <img src={react} alt="" className=" w-10 h-10" />
            <img src={mongodb} alt="" className=" w-10 h-10" />
            <img src={node} alt="" className=" w-10 h-10" />
            <img src={express} alt="" className=" w-10 h-10" />
            <img src={nextjs} alt="" className=" w-10 h-10" />
            <img src={mongoose} alt="" />
            <img src={tailwind} alt="" className=" w-10 h-10" />
            <img src={mui} alt="" className=" w-10 h-10" />
          </div>
        </div>
      </div>
      </section>
      <section id="about" className={activeSection === 'about' ? 'active pt-36' : 'pt-36'}>
        <div className=" flex flex-col-reverse lg:flex-row justify-center gap-8 h-[800px]"> 
          <div>
            about photo
          </div>
          <div>
            <h4 className=" text-p text-xl font-medium text-center">About Me </h4>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
