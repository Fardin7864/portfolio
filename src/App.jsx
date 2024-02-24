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
import blog from "../src/assets/blog boom.png";
import blood from "../src/assets/blood.png";
import esport from "../src/assets/sports.png";
import auto from "../src/assets/automotive.png";
import movie from "../src/assets/movie.png";

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
      <a
        href="https://drive.google.com/file/d/1uPpiUPExGg38uryKVAWT7aGtKR4uNP5F/view?usp=sharing"
        target="_blank"
      >
        <li className=" btn bg-transparent border-none text-p navLink">
          Resume
        </li>
      </a>
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
      {/* Navbar */}
      <div className="navbar fixed top-0 z-50">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
        {/* project section */}
        <section
          id="projects"
          className={activeSection === "projects" ? "active " : ""}
        >
          <div className=" flex flex-col gap-8 justify-center items-center">
            <h4 className=" text-[#FFEED9] text-3xl font-bold  my-3 border-b-2 border-blue-500">
              Projects{" "}
            </h4>
            <h4 className=" text-[#FFEED9] text-2xl mb-9  font-bold border-blue-500 text-center px-5">
              Each project is a unique piece of development 🧩
            </h4>
            {/* Movie Database  projects */}
            <div className="projects-grid px-20 ">
              <div className="pro pro__1 undefined">
                <div className=" lg:w-1/2 text-p">
                  <h4 className=" text-[#0099ff] text-2xl font-bold text-center my-3">
                    MovieDb{" "}
                  </h4>
                  <p className=" text-justify flex flex-col gap-3">
                    <p>
                      • The "moviedb" project is a private module built for fetching movie data from TheMovieDB API and Clean Code. 
                    </p>
                    <p>
                      • Utilize localStorage for save watch lis.
                    </p>
                    <p>
                      • Responsive: Prioritized a seamless user experience
                      across all size devices, including mobile and desktop.
                    </p>
                    <p>
                      • Fetch movie data from TheMovieDB API.
                    </p>
                    <p>
                      • Display loading skeleton while fetching data.
                    </p>
                    <p>
                      • Filter movies by popularity and rating.
                    </p>
                    <p>
                      • Implement a dynamic search bar for searching movies.
                    </p>
                    <p className="my-2">
                      <b>Technologies:</b> React.js, Tailwind, Daisy Ui etc.
                    </p>
                  </p>
                  <div className=" flex justify-center items-center gap-9">
                    <button className=" text-blue-400 underline text-xl gap-5 flex justify-center items-center">
                      <a
                        href="https://moviedb-by-fardin.netlify.app/"
                        target="_blank"
                      >
                        Live Site Link
                      </a>
                    </button>
                    |
                    <button className=" text-xl gap-5 flex justify-center items-center">
                      Code:{" "}
                      <a
                        href="https://github.com/Fardin7864/moviedb.git"
                        target="_blank"
                      >
                        <FaGithub className=" text-3xl" />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="pro__img">
                  <a
                    href="https://moviedb-by-fardin.netlify.app/"
                    target="_blank"
                  >
                    <img src={movie} alt="" className="scrolling-image" />
                  </a>
                </div>
              </div>
            </div>
            {/* blog portal */}
            <div className="projects-grid px-20 ">
              <div className="pro pro__1 flex flex-col lg:flex-row">
                <div className="pro__img">
                  <a href="https://blog-bloom-94414.web.app/" target="_blank">
                    <img src={blog} alt="" className="scrolling-image" />
                  </a>
                </div>
                <div className=" lg:w-1/2 text-p">
                  <h4 className=" text-[#0099ff] text-2xl font-bold text-center">
                    Blog Portal{" "}
                  </h4>
                  <p className="text-justify flex flex-col gap-3">
                    <p>
                      • Developed 'Discover,' a MERN stack web application
                      facilitating blog creation, management, and discovery.{" "}
                    </p>
                    <p>
                      • Leveraged React for the frontend, Express for the
                      backend, and integrated third-party packages for enhanced
                      the best features.{" "}
                    </p>
                    <p>
                      • Implemented user authentication, Wishlist functionality,
                      and featured blogs.{" "}
                    </p>
                    <p>
                      • Utilized technologies including Firebase, Axios,
                      Tailwind, and Framer Motion for seamless user experience.{" "}
                    </p>
                    <p>
                      • Skillfully implemented responsive design principles,
                      custom hooks, and additional features, including robust
                      JWT authentication and user-friendly toast messages for an
                      enhanced user experience.
                    </p>
                    <p className="my-2">
                      <b>Technologies:</b> React.js, Tailwind, Firebase, Axios,
                      JSON web token, MongoDB etc.
                    </p>
                  </p>
                  <div className=" flex justify-center items-center gap-9">
                    <button className=" text-blue-400 underline text-xl gap-5 flex justify-center items-center">
                      <a
                        href="https://blog-bloom-94414.web.app/"
                        target="_blank"
                      >
                        Live Site Link
                      </a>
                    </button>
                    |
                    <button className=" text-xl gap-5 flex justify-center items-center">
                      Code:{" "}
                      <a
                        href="https://github.com/Fardin7864/e-portal"
                        target="_blank"
                      >
                        <FaGithub className=" text-3xl" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Blood donation projects */}
            <div className="projects-grid px-20 ">
              <div className="pro pro__1 undefined">
                <div className=" lg:w-1/2 text-p">
                  <h4 className=" text-[#0099ff] text-2xl font-bold text-center my-3">
                    Blood Donation Platform{" "}
                  </h4>
                  <p className=" text-justify flex flex-col gap-3">
                    <p>
                      • Admin Dashboard: Successfully implemented role-based
                      access control and an intuitive admin dashboard for
                      comprehensive user management, streamlined donation
                      request oversight, efficient content controlled.
                    </p>
                    <p>
                      • User Authentication: We have implemented a robust system
                      to ensure secure registration and login processes,
                      incorporating JSON Web Tokens (JWT ) to enhance data
                      protection and bolster overall security.
                    </p>
                    <p>
                      • Responsive: Prioritized a seamless user experience
                      across all size devices, including mobile and desktop.
                    </p>
                    <p>
                      • Funding: Integrated a funding page with Stripe payment
                      functionality, allowing users to contribute securely.
                    </p>
                    <p className="my-2">
                      <b>Technologies:</b> React.js, Express, Daisy Ui, JWT,
                      Mongoose, Stipe hook etc.
                    </p>
                  </p>
                  <div className=" flex justify-center items-center gap-9">
                    <button className=" text-blue-400 underline text-xl gap-5 flex justify-center items-center">
                      <a
                        href="https://blood-donation-c2b2f.web.app/"
                        target="_blank"
                      >
                        Live Site Link
                      </a>
                    </button>
                    |
                    <button className=" text-xl gap-5 flex justify-center items-center">
                      Code:{" "}
                      <a
                        href="https://github.com/Fardin7864/blood-donation-project"
                        target="_blank"
                      >
                        <FaGithub className=" text-3xl" />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="pro__img">
                  <a
                    href="https://blood-donation-c2b2f.web.app/"
                    target="_blank"
                  >
                    <img src={blood} alt="" className="scrolling-image" />
                  </a>
                </div>
              </div>
            </div>
            {/* E-Sports project */}
            <div className="projects-grid px-20 ">
              <div className="pro pro__1 undefined">
                <div className="pro__img">
                  <a href="https://esports-event.web.app/" target="_blank">
                    <img src={esport} alt="" className="scrolling-image" />
                  </a>
                </div>
                <div className=" lg:w-1/2 text-p">
                  <h4 className=" text-[#0099ff] text-2xl font-bold text-center">
                    E-Sports Organizer{" "}
                  </h4>
                  <p className=" text-justify flex flex-col gap-3">
                    <p>
                      • Event Types: Anubis caters to diverse esports event
                      types, ensuring a personalized and smooth experience.
                    </p>
                    <p>
                      • Private Routes: To ensure the Safeguard sensitive
                      information and authenticate users with private routes.
                    </p>
                    <p>
                      • Local Storage: Enhance user experience by saving and
                      retrieving preferences using local storage on client.{" "}
                    </p>
                    <p>
                      • Responsive Design: Enjoy a seamlessly responsive layout
                      that adapts to both desktop and mobile devices.
                    </p>
                    <p>
                      • AOS Animation: For the Smooth and captivating animations
                      using the AOS package on the homepage.
                    </p>
                    <p className="my-2">
                      <b>Technologies:</b> React.js, Tailwind, AOS, Framer
                      Motion, Local Storage etc.
                    </p>
                  </p>
                  <div className=" flex justify-center items-center gap-9">
                    <button className=" text-blue-400 underline text-xl gap-5 flex justify-center items-center">
                      <a href="https://esports-event.web.app/" target="_blank">
                        Live Site Link
                      </a>
                    </button>
                    |
                    <button className=" text-xl gap-5 flex justify-center items-center">
                      Code:{" "}
                      <a
                        href="https://github.com/Fardin7864/e-sports"
                        target="_blank"
                      >
                        <FaGithub className=" text-3xl" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Anubis Auto Motive */}
            <div className="projects-grid px-20 ">
              <div className="pro pro__1 undefined">
                <div className=" lg:w-1/2 text-p">
                  <h4 className=" text-[#0099ff] text-2xl font-bold text-center my-3">
                    Anubis Auto Motive{" "}
                  </h4>
                  <p className=" text-justify flex flex-col gap-3">
                    <p>
                      • Admin Dashboard: Successfully implemented role-based
                      access control and an intuitive admin dashboard for
                      comprehensive user management, streamlined donation
                      request oversight, efficient content controlled.
                    </p>
                    <p>
                      • User Authentication: We have implemented a robust system
                      to ensure secure registration and login processes,
                      incorporating JSON Web Tokens (JWT ) to enhance data
                      protection and bolster overall security.
                    </p>
                    <p>
                      • Responsive: Prioritized a seamless user experience
                      across all size devices, including mobile and desktop.
                    </p>
                    <p>
                      • Funding: Integrated a funding page with Stripe payment
                      functionality, allowing users to contribute securely.
                    </p>
                    <p className="my-2">
                      <b>Technologies:</b> React.js, Express, Daisy Ui, JWT,
                      Mongoose, Stipe hook etc.
                    </p>
                  </p>
                  <div className=" flex justify-center items-center gap-9">
                    <button className=" text-blue-400 underline text-xl gap-5 flex justify-center items-center">
                      <a
                        href="https://anubis-automotive.web.app/"
                        target="_blank"
                      >
                        Live Site Link
                      </a>
                    </button>
                    |
                    <button className=" text-xl gap-5 flex justify-center items-center">
                      Code:{" "}
                      <a
                        href="https://github.com/Fardin7864/blood-donation-project"
                        target="_blank"
                      >
                        <FaGithub className=" text-3xl" />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="pro__img">
                  <a href="https://anubis-automotive.web.app/" target="_blank">
                    <img src={auto} alt="" className="scrolling-image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className={activeSection === "contact" ? "active " : ""}
        >
          <div className=" py-8 flex justify-center flex-col gap-8 items-center px-5">
            <h4 className=" text-[#FFEED9] text-3xl font-bold  my-3 border-b-2 border-blue-500">
              Contact{" "}
            </h4>
            <div className=" bg-[#00008b] flex flex-col  items-center justify-center gap-3 py-8 px-5 lg:px-36 rounded-lg">
              <h4 className=" text-[#FFEED9] text-xl font-bold  my-3 ">
                You can contact me via email:{" "}
                <a
                  href="mailto:fardinhasan18@gmail.com"
                  className=" text-blue-500"
                >
                  fardinhasan18@gmail.com
                </a>
              </h4>
              <h4 className=" text-[#FFEED9] text-base font-bold  my-3 ">
                Or click the button below to send me a message:
              </h4>

              <div className=" flex gap-8 justify-center items-center">
                <a href="mailto:fardinhasan18@gmail.com">
                  <img
                    src="https://img.shields.io/badge/Contact%20Me-Email-blue?style=for-the-badge&logo=gmail"
                    alt="Contact Me"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/fardinhasan"
                  target="_blank"
                >
                  <img
                    src="https://img.shields.io/badge/Connect%20with%20Me-LinkedIn-blue?style=for-the-badge&logo=linkedin"
                    alt="Connect with Me on LinkedIn"
                  />
                </a>
              </div>
              <p className=" text-p">
                Let's code something amazing together! 🚀
              </p>
            </div>
          </div>
          {/* Footer  */}
          <footer
            className="footer items-center p-4 bg-neutral text-neutral-content justify-center"
            style={{ backgroundColor: "darkblue", color: "white" }}
          >
            <aside className="items-center grid-flow-col">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              {buttons}
            </nav>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
