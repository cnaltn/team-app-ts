import Image from "next/image";
import Link from "next/link";
import React from "react";

const LearnButton = () => {
  return (
    <div>
      <Link className="w-max flex" href="/">
        <div className="group  text-[--desatured-blue] leading-[--line-link] text-[16px] hover:underline flex items-center ">
          Learn More
          <Image
            src="/rightarr.png"
            className=" group-hover:opacity-100 group-hover:translate-x-2 opacity-0 transition-all duration-300 ease-in-out"
            alt="arrow"
            height={20}
            width={20}
          ></Image>
        </div>
      </Link>
    </div>
  );
};

export default LearnButton;
