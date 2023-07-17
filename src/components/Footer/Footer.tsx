import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FList {
  id: number;
  heading: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  href1: string;
  href2: string;
  href3: string;
  href4: string;
}

const list: FList[] = [
  {
    id: 1,
    heading: "Company",
    label1: "Product",
    href1: "/product",
    label2: "Blog",
    href2: "/blog",
    label3: "Support",
    href3: "/support",
    label4: "",
    href4: "",
  },
  {
    id: 2,
    heading: "Features",
    label1: "Screen Sharing",
    href1: "/",
    label2: "iOS & Android Apps",
    href2: "/",
    label3: "File Sharing",
    href3: "/",
    label4: "User Managment",
    href4: "/",
  },
  {
    id: 3,
    heading: "Contact Us",
    label1: "info@canaltun.dev",
    href1: "/",
    label2: "+90-111-111-11-11",
    href2: "/",
    label3: "34034 Kadıköy, İstanbul/Türkiye",
    href3: "/",
    label4: "",
    href4: "/",
  },
];

const Footer = () => {
  return (
    <div className="w-full  flex bg-[--dark-blue] ">
      <div className="mainContainer h-max md:h-[500px] flex flex-col pt-20 gap-x-36 gap-y-8">
        <div className="flex flex-col lg:flex-row gap-x-40 gap-y-8 justify-between w-full">
          <div className="flex flex-col  gap-y-[16px]">
            <Image
              src="/LightLogo.png"
              width={138}
              height={52}
              alt="footerlogo"
            ></Image>
            <h2 className="text-[--off-white] text-[14px]">
              Collaboration platform for mordern team
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-y-8 ">
            {list.map((item) => (
              <div className="gap-y-[16px] flex flex-col" key={item.id}>
                <h1 className="text-[24px] text-[--soft-blue]">
                  {item.heading}
                </h1>
                <div className="text-[--off-white]  text-[14px] gap-y-[16px] flex flex-col">
                  <Link className="w-max" href={item?.href1}>
                    <p className="hover:underline w-max">{item?.label1}</p>
                  </Link>
                  <Link className="w-max" href={item?.href2}>
                    <p className="hover:underline w-max">{item?.label2}</p>
                  </Link>
                  <Link className="w-max" href={item?.href3}>
                    <p className="hover:underline w-max">{item?.label3}</p>
                  </Link>
                  <Link className="w-max" href={item?.href4}>
                    <p className="hover:underline w-max">{item?.label4}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full md:items-end flex flex-col md:flex-row pb-10 justify-between">
          <p className="text-[14px] text-[--off-white]">
            © Copyright Team Inc.
          </p>
          <p className="text-[9px]  md:text-[14px] text-[--off-white] flex items-center gap-x-1">
            <span>
              <Image
                alt="copylogo"
                src="/LightLogo.png"
                className="pb-2 "
                width={70}
                height={10}
              ></Image>
            </span>{" "}
            is a Frontend Project Demo & Developed by{" "}
            <Link
              className="underline underline-offset-2 animate-pulse"
              href="https://canaltun.dev"
              target="_blank"
            >
              canaltun.dev
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
