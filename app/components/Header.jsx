"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import SearchBox from "./SearchBox";
import Image from "next/image";
import burgerMenu from "../../public/menu-burger.svg";
import VideoPlayer from "./VideoPlayer";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "About", href: "/about" },
    { name: "Contact Me", href: "/contact" },
  ];
  return (
    <>
      <section>
        <header className="shadow-2xl">
          <nav className="flex items-center justify-between w-[95%] mx-auto py-3">
            <Link
              href="/"
              className="lg:w-[20%] text-2xl md:text-3xl font-extrabold text-[#3d5168]"
            >
              FA - <span className="">Coded</span>
            </Link>

            <div
              className={
                "z-10 flex flex-col lg:flex lg:flex-row absolute top-16 bg-[#3d5168]/95 lg:bg-transparent mx-auto lg:top-0 left-0 right-0 lg:relative lg:w-[50%] py-2 lg:items-center lg:justify-center " +
                (toggleMenu ? "flex show" : "hidden")
              }
            >
              {menuItems.map((menuItem, index) => (
                <div key={index} className="py-5 md:py-2 border lg:border-[#3d5168]">
                  <Link
                    href={menuItem.href}
                    className="text-lg px-2 py-4 md:px-7 font-bold hover:bg-[#3d5168] hover:text-white md:py-3 text-white lg:text-[#3d5168]"
                    onClick={() => setToggleMenu((currentVal) => !currentVal)}
                  >
                    {" "}
                    {menuItem.name}{" "}
                  </Link>
                </div>
              ))}
            </div>

            <div className="lg:w-[30%] flex justify-end">
              <Link
                href="https://drive.google.com/file/d/19MNlkOHemlPxuyC5jc75x8CvhGK6rxuj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Master Resume" />
              </Link>
              <div className="lg:hidden ml-3">
                <Image
                  src={burgerMenu}
                  width={40}
                  height={40}
                  alt="menu toggle"
                  onClick={() => setToggleMenu((currentVal) => !currentVal)}
                />
              </div>
            </div>
          </nav>
        </header>
        <div className="flex flex-col gap 2">
          <div className="mb-10">
            <VideoPlayer />
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
