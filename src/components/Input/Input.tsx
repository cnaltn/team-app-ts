import React from "react";

const Input = (props: { label: string }) => {
  return (
    <div>
      <input
        className="bg-[--off-white] w-full sm:w-[298px] h-[46px] px-[16px] py-[11px] placeholder:text-[--desatured-blue] placeholder:text-[14px] rounded-[4px] text-[--soft-blue]"
        placeholder={props.label}
      ></input>
    </div>
  );
};

export default Input;
