"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

interface IList {
  id: number;
  title: string;
  href: string;
}

const list: IList[] = [
  { id: 1, title: "Home", href: "/" },
  {
    id: 2,
    title: "Blog",
    href: "/blog",
  },
  { id: 3, title: "Support", href: "/support" },
  { id: 4, title: "Log In", href: "/login" },
];

const Header = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent text-white");
  const [toggleLogo, setToggleLogo] = useState("/LightLogo.png");

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbarColor("bg-white text-stone-800 shadow-lg py-10  ");
      setToggleLogo("/DarkLogo.png");
    } else {
      setNavbarColor("bg-transparent text-white");
      setToggleLogo("/LightLogo.png");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className="flex h-[52px] mt-[0px] lg:mt-[40px] fixed z-50 w-full  ">
      <div
        className={`mainContainer  w-full flex items-center ${navbarColor}  lg:rounded  justify-between transition-all duration-300 ease-in-out `}
      >
        <div className="relative w-[100px] h-[40px] lg:w-[138px] lg:h-[52px] ">
          <Image alt="Dark_Logo" fill={true} src={toggleLogo}></Image>
        </div>
        <div className="hidden lg:flex gap-x-[56px] items-center ">
          {list.map((item) => (
            <div className="hover:underline " key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}
          <Button label="Get Access" href="/"></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
