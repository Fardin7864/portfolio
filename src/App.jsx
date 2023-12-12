import WaveAnimation from "./components/Wave/Wave";
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
import fardin from "../src/assets/pc.jpg";
import developer from "../src/assets/working-emoji.c5325f52b5be329995a5.png";
import frontend from "../src/assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";

import { useEffect, useState } from "react";

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
      <li
        className=" btn bg-transparent border-none text-p navLink"
        onClick={() => handleNavClick("home")}
      >
        Home
      </li>
      <li
        className=" btn bg-transparent border-none text-p navLink"
        onClick={() => handleNavClick("projects")}
      >
        Projects
      </li>
      <li
        className=" btn bg-transparent border-none text-p navLink"
        onClick={() => handleNavClick("about")}
      >
        About
      </li>
      <li
        className=" btn bg-transparent border-none text-p navLink"
        onClick={() => handleNavClick("contact")}
      >
        Contact
      </li>
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
      <div className=" lg:mt-28 mt-10">
        <section id="home" className={activeSection === "home" ? "active" : ""}>
          <div className=" z-30 relative w-full mx-auto">
            <div className=" relative lg:top-16 z-40 flex flex-col p-6 lg:flex-row justify-center gap-8">
              <div className=" lg:w-1/2 ">
                <h1 className=" text-3xl font-extrabold lg:text-blue-900 text-p">
                  Hi,
                  <br />
                  <span className=" text-[#FFEED9] text-xl lg:text-4xl clear-left flex gap-5">
                    <span className=" text-xl lg:text-3xl text-[#E0F4FF]">
                      I'm{" "}
                    </span>{" "}
                    <Name speed="100" message="Fardin Hasan" />
                  </span>
                </h1>

                <h2 className=" mt-4 font-extrabold lg:text-4xl text-white flex gap-5">
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
            <div className=" mt-24 w-full flex justify-center items-center gap-14 px-5">
              <h4 className=" text-2xl font-medium text-p flex gap-9">
                Tech Stack <span>|</span>
              </h4>
              <div className=" flex flex-wrap items-center justify-center gap-4">
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
        <section
          id="about"
          className={activeSection === "about" ? "active py-36" : "py-36"}
        >
          <div className=" flex flex-col px-5 lg:px-0 lg:flex-row justify-center items-center gap-14">
            <div
              className=" bg-cover bg-no-repeat hero-overlay hero lg:w-96 h-72 rounded-xl"
              style={{ backgroundImage: `url(${fardin})` }}
            >
              <div className="hero-overlay bg-gradient-to-r from-blue-500 to-blue-500 bg-opacity-10 rounded-xl"></div>
              <img src={developer} alt="" className=" w-1/3" />
              {/* <img src={fardin} alt="" className=" rounded-xl w-96 h-72 bg-gradient-to-r from-blue-500 to-blue-500"/> */}
              <span className="">
                <img src={frontend} alt="" className=" rounded-img" />
              </span>
            </div>
            <div className=" lg:w-1/2">
              <h4 className=" text-[#0099ff] text-2xl font-bold text-center my-3">
                About Me{" "}
              </h4>
              <p className="text-p leading-8 text-justify">
                As a Junior MERN stack developer with a passion for crafting
                seamless user experiences. My toolkit includes proficiency in
                MongoDB, Express.js, React, and Node.js. I specialize in
                translating design concepts into responsive and visually
                appealing web applications. 🚀 <b>Skills at a Glance:</b>
                <em>Front-End Mastery:</em> Proficient in HTML, CSS, JavaScript,
                React, Tailwind, Express, Nodejs, MongoDB, Mongoose, MUI and
                Next.js .<em>User-Centric Design:</em> Dedicated to creating
                responsive websites for an optimal user experience. Clean Code
                Advocate: Expertise in crafting dynamic and engaging interfaces
                through clean, optimized code. 💡<b> What Sets Me Apart:</b>
                <em>Cutting-Edge Tech:</em> Stay updated with the latest
                development tools and techniques.
                <em>Collaborative Team Player:</em> Thrive in cross-functional
                teams, contributing to outstanding web applications. Let's
                collaborate to turn ideas into functional and visually stunning
                web solutions!
              </p>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className={activeSection === "projects" ? "active " : ""}
        >
          <div className=" flex flex-col gap-8 justify-center items-center">
          <h4 className=" text-[#FFEED9] text-3xl font-bold  my-3 border-b-2 border-blue-500">
            Projects{" "}
          </h4>
          <h4 className=" text-[#FFEED9] text-2xl mb-9  font-bold border-blue-500">
          Each project is a unique piece of development 🧩
          </h4>


        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
