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
    { name: "My Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact Me", href: "/contact" },
  ];
  return (
    <>
      <section>
        <header className="shadow">
          <nav className="flex items-center justify-between w-[95%] mx-auto py-4">
            <Link
              href="/"
              className="flex-1 text-2xl md:text-3xl font-extrabold text-red-700"
            >
              FA - <span className="">Coded</span>
            </Link>

            <div
              className={
                "lg:flex absolute top-20 w-full mx-auto lg:top-0 left-0 right-0 lg:relative flex-1 py-2 items-center justify-center lg:justify-between lg:show gap-2 lg:gap-0 " +
                (toggleMenu ? "flex show" : "hidden")
              }
            >
              {menuItems.map((menuItem, index) => (
                <div key={index} className="py-1">
                  <Link
                    href={menuItem.href}
                    className="text-lg px-2.5 font-bold bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 bg-clip-text text-transparent"
                    onClick={() => setToggleMenu((currentVal) => !currentVal)}
                  >
                    {" "}
                    {menuItem.name}{" "}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex-1 flex justify-end">
              <Button text="My Resume" />
            </div>

            <div className="w-12 lg:hidden ml-3">
              <Image
                src={burgerMenu}
                width={200}
                height={100}
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
