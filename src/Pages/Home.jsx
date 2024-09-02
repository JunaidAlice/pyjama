import ReactPlayer from "react-player";
import img1 from "../assets/hero section/twitter.svg";
import img2 from "../assets/hero section/tiktok.svg";
import img3 from "../assets/hero section/telegram.svg";
import img4 from "../assets/hero section/insta.svg";
import img5 from "../assets/hero section/facbook.svg";

import Scroll from "../compnent/Scroll";
import video from "../assets/hero section/video.mp4";
import Bar from "../compnent/Bar.jsx";
import Bar2 from "../compnent/Bar2.jsx";
import Presale from "./Presale.jsx";
import About from "./About.jsx";
import Roadmap from "../compnent/roadmap.jsx";
import { useState, useEffect } from "react";
import Navbar from "../compnent/Navbar.jsx";
import { IoCopy } from "react-icons/io5";
import Footer from "../compnent/Footer.jsx";


const Home = () => {
  const imgLinks = [
    { id: 1, title: img1 },
    { id: 2, title: img2 },
    { id: 3, title: img3 },
    { id: 4, title: img4 },
    { id: 5, title: img5 },
  ];

  return (
    <>
      <Navbar />
      <div className="p-4 bg-[#312965] bg-opacity-95 grid grid-cols-1 justify-center md:flex gap-6 text-white font-acme">
        <div className="vedio md:w-[65%] border border-[#787878] bg-[#787878] p-2 bg-opacity-15 flex justify-center items-center flex-col rounded-2xl space-y-5 overflow-hidden">
          <h1 className="text-3xl">Join the PyjamaCoin Presale</h1>

          <div className="overflow-hidden rounded-2xl border w-[80%] md:w-[70%] 1000px:w-fit flex justify-center">
            <ReactPlayer className="w-[70%]" controls url={video} />
          </div>

          <div className="loop 1000px:w-fit flex justify-center">
            <div className="border border-[#787878] p-3 rounded-md overflow-hidden w-[80%] md:w-[70%] 1000px:w-fit flex justify-center">
              <Scroll />
            </div>
          </div>
          <h1>Join the Pyjama Community Now!</h1>
          <div className="flex md:gap-2">
            {imgLinks.map((t, id) => (
              <a key={id} href={t.Path}>
                <img src={t.title} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-[#787878] border rounded-2xl bg-[#787878] bg-opacity-15">
          <Aside />
        </div>
      </div>
      <div id="presale" className="bg-[#312965] bg-opacity-95 p-4">
        <Bar />
      </div>
      <Presale />
      <div id="" className="bg-[#312965] bg-opacity-95 p-4">
        <Bar2 />
      </div>
      
      <div id="about">
        <About />
      </div>
      <div id="whitepaper">
        <Roadmap />
      </div>
     <div id="" className="bg-[#312965] bg-opacity-95 p-4">
      <Footer/>
     </div>
    </>
  );
};

// Aside Card Component

const Aside = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <div className="p-2  rounded-2xl">
      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-3xl">Presale Live Now!</h1>
        <h1>Second Round</h1>
        {/* Timer */}
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div  className="border p-1 w-[90%] rounded-md">
          <div className="bg-[#01B1FD] p-6 w-[40%]">

          </div>
          

        </div>
     
     
        <h1>
          1 SOL = <span>~25,000 $PYJAMA COIN</span>
        </h1>
        <div className="bg-white border-[#787878] border rounded-md p-2 text-black flex  items-center justify-center">
          <button className="bg-[#01B1FD] px-1 py-1 rounded-md">
            wallet Address
          </button>

          <div className="text-xm ">
            5dL1 GxM52 CAXjX pQdb8s MogS JrjGu GAp2k EwsyPEorcj<IoCopy />
          </div>

          {/* <button className="border border-[#787878] rounded-md px-1 border-none fill-blue-800 h-10">
            
          </button> */}
        </div>
        <button className="bg-[#01B1FD] p-2 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

// Countdown Timer Function
function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeRemaining.days }}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeRemaining.hours }}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeRemaining.minutes }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeRemaining.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}

// Calculate time remaining for Countdown
function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default Home;
