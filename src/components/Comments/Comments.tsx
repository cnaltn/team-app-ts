import Image from "next/image";
import React from "react";

const Comments = (props: {
  label: string;
  name: string;
  rank: string;
  image: string;
}) => {
  return (
    <div className="py-4 px-3">
      <div className=" drop-shadow-md rounded-lg w-full px-[14px] py-[20px] md:px-[20px] md:py-[32px] gap-y-[26px] md:gap-y-[40px]  flex flex-col bg-white">
        <div className="gap-y-[18px] md:gap-y-[24px] flex flex-col">
          <div className="flex gap-x-4">⭐⭐⭐⭐⭐</div>
          <div className="text-[14px]  md:text-[18px] text-[--dark-blue] leading-[">
            {props.label}
          </div>
        </div>
        <div className="flex items-center gap-x-[16px] leading-[--line-p-dekstop]">
          <div className="">
            <Image
              src={props.image}
              className="w-9 h-max md:w-full "
              height={56}
              width={56}
              alt="avatar"
            ></Image>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[15px] sm:text-[15px] md:text-[20px] leading-none lg:text-[24px] font-[400] text-[--dark-blue]">
              {props.name}
            </h2>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] leading-none lg:text-[14px] text-[--desatured-blue]">
              {props.rank}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
