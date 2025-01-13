"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import SearchBox from "./SearchBox";
import Image from "next/image";
import burgerMenu from "../../public/menu-burger.svg";

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
        <header className="shadow">
          <nav className="flex items-center justify-between w-[95%] mx-auto py-3">
            <Link
              href="/"
              className="lg:w-[30%] text-2xl md:text-3xl font-extrabold text-red-700"
            >
              FA - <span className="">Coded</span>
            </Link>

            <div
              className={
                "lg:flex absolute top-16 bg-red-700 lg:bg-transparent mx-auto lg:top-0 left-0 right-0 lg:relative lg:w-[40%] py-2 items-center justify-center lg:show " +
                (toggleMenu ? "flex show" : "hidden")
              }
            >
              {menuItems.map((menuItem, index) => (
                <div key={index} className="py-1">
                  <Link
                    href={menuItem.href}
                    className="text-lg px-2 md:px-7 font-bold hover:bg-red-700 hover:text-white py-3 text-white lg:text-red-700"
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
                <Button text="My Resume" />
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

        <SearchBox />
      </section>
    </>
  );
}

export default Header;
