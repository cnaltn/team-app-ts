import Link from "next/link";
import React from "react";

const Button = (props: { label: string; href: string }) => {
  return (
    <Link href={props.href}>
      <div className="w-full text-center sm:w-max px-[44px] h-[46px] py-[10px] bg-[--soft-blue] rounded-[4px] text-white hover:bg-[#3A51E3] active:bg-[#192EB3] transition-colors    ">
        {props.label}
      </div>
    </Link>
  );
};

export default Button;
