import logo from "../assets/navstuf/logo.svg";
import imgfb from "../assets/navstuf/fb.svg";
import imginsta from "../assets/navstuf/insta.svg";
import imgtelegrame from "../assets/navstuf/telegrame.svg";
import imgtiktok from "../assets/navstuf/tiktok.svg";
import imgtwitter from "../assets/navstuf/twitter.svg";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const navlinks = [
    { path: "#home", title: "Home" },
    { path: "#about", title: "About Us" },
    { path: "#whitepaper", title: "Whitepaper" },
    { path: "#presale", title: "Presale" },
  ];

  const imglinks = [
    { img: imgfb, link: "#" },
    { img: imgtwitter, link: "#" },
    { img: imgtelegrame, link: "#" },
    { img: imginsta, link: "#" },
    { img: imgtiktok, link: "#" },
  ];

  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="navbar p-4 bg-[#312965] bg-opacity-95 text-white grid grid-cols-1 justify-center font-acme ">
        <div className="flex justify-around border bg-[#787878] rounded-3xl bg-opacity-15 ">
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
            <h1 id="navbar">pyjamacoin</h1>
          </div>
          <div className="navlinks hidden md:flex items-center">
            <ul className="flex gap-4 md:ml-10">
              {navlinks.map((t, i) => (
                <li className="flex items-center justify-center" key={i}>
                  <a href={t.path}>{t.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden 900px:flex justify-center items-center gap-1">
            {imglinks.map((img, index) => (
              <a key={index} href={img.link}>
                <img className="flex gap-2" src={img.img} alt="Social Icon" />
              </a>
            ))}
            <button className="border-[#787878] rounded-md uppercase py-1 px-2 bg-[#01B1FD]">
              Connect Wallet
            </button>
          </div>
          {toggle ? (
            <div className="flex items-center justify-center 900px:hidden">
              <IoMenu onClick={handleClick} aria-label="Open Menu" />
            </div>
          ) : (
            <div className="flex items-center justify-center 900px:hidden">
              <IoClose onClick={handleClick} aria-label="Close Menu" />
            </div>
          )}
        </div>
      </nav>

      {!toggle && (
        <>
          <div className="navlinks md:hidden flex flex-col items-center absolute w-full bg-[#787878] h-52 top-44 z-50 font-acme text-white">
            <ul className="flex flex-col gap-4 md:ml-10">
              {navlinks.map((t, i) => (
                <li className="flex flex-col items-center justify-center" key={i}>
                  <a href={t.path}>{t.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="900px:hidden flex justify-center items-center gap-1 flex-wrap pt-4 bg-[#787878]  absolute w-full z-50">
            {imglinks.map((img, index) => (
              <a key={index} href={img.link}>
                <img className="flex gap-2 pb-4" src={img.img} alt="Social Icon" />
              </a>
            ))}
            <button className="border-[#787878]  rounded-md uppercase py-1 text-white px-2 bg-[#01B1FD]">
              Connect Wallet
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
