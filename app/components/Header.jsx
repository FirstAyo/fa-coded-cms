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
    { name: "My Projects", href: "/project" },
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
              className="flex-1 text-2xl md:text-3xl font-extrabold text-red-700"
            >
              FA - <span className="">Coded</span>
            </Link>

            <div
              className={
                "lg:flex absolute top-16 w-full bg-red-700/80 lg:bg-transparent mx-auto lg:top-0 left-0 right-0 lg:relative flex-1 py-2 items-center justify-center lg:justify-between lg:show lg:gap-0 " +
                (toggleMenu ? "flex show" : "hidden")
              }
            >
              {menuItems.map((menuItem, index) => (
                <div key={index} className="py-1">
                  <Link
                    href={menuItem.href}
                    className="text-lg px-3 font-bold hover:bg-red-700 hover:text-white py-4 text-white lg:text-red-700"
                    onClick={() => setToggleMenu((currentVal) => !currentVal)}
                  >
                    {" "}
                    {menuItem.name}{" "}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex-1 flex justify-end">
              <Link href="https://drive.google.com/file/d/19MNlkOHemlPxuyC5jc75x8CvhGK6rxuj/view?usp=drive_link">
                <Button text="My Resume" />
              </Link>
            </div>

            <div className="lg:hidden ml-3">
              <Image
                src={burgerMenu}
                width={40}
                height={40}
                alt="menu toggle"
                onClick={() => setToggleMenu((currentVal) => !currentVal)}
              />
            </div>
          </nav>
        </header>

        <SearchBox />
      </section>
    </>
  );
}

export default Header;
