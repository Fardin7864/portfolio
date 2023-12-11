import WaveAnimation from "./components/Wave/Wave";
import Navbar from "./components/Navbar/Navbar";
import { FaHandsClapping } from "react-icons/fa6";
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import Name from "./components/Name/Name";
import react from '../src/assets/react.svg'
import javascript from '../src/assets/javascript.svg'
import profile from './assets/profile.png'


function App() {

  const buttons = <>
  <button className=" text-2xl"><a href="https://www.linkedin.com/in/fardinhasan/" target="_blank"><FaLinkedin/></a></button>
  <button className=" text-2xl"><a href="https://github.com/Fardin7864" target="_blank"><FaGithub /></a></button>
  </>

  return (
    <div className=" bg-blue-800 h-[800px]">
      <WaveAnimation />
      <Navbar />
      <div className=" z-30 relative w-full mx-auto">
        <div className=" relative top-16 z-40 flex justify-center gap-8 ">
          <div className=" w-1/2 ">
          <h1 className=" text-3xl font-extrabold text-blue-900">
            Hi,
            <br />
            <span className=" text-[#FFEED9] text-4xl clear-left flex gap-5">
              <span className=" text-3xl text-[#E0F4FF]">I'm </span>{" "}
              <Name speed='100' message="Fardin Hasan" />
            </span>
            {/* <Name/> */}
          </h1>

          <h2 className=" mt-4 font-extrabold text-4xl text-white flex gap-5" >
            Front-End {" "}
            <span className=" flex gap-3 items-center ">
              {" "}
              Developer <FaHandsClapping className="text-[#FFEED9]" />
            </span>
          </h2>
          <p className=" mt-4 text-[#FFEED9] z-40"><Name speed='0' message={`Hello, this is Fardin Code Ninja with a MERN of Steel! 🚀 Crafting web magic with MongoDB, Express, React, and Node.js. Turning caffeine into code and bugs into features. Let's create websites that are so good, even my coffee gets jealous! ☕💻`}/>
          <span className=" flex gap-4 mt-3 w-1/2 justify-center ">{buttons}</span></p>
          </div>
          <div className=" hero-img">
          </div>
        </div>
        <div className=" mt-24 w-full flex justify-center items-center gap-14">
          <h4 className=" text-2xl font-medium text-p flex gap-9">Tech Stack <span>|</span></h4>
          <div className=" flex items-center justify-center">
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={javascript} alt="" />
            <img src={javascript} alt="" />
            <img src={javascript} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
