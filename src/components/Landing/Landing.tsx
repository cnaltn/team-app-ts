import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Image from "next/image";
import Link from "next/link";
import LearnButton from "../LearnButton/LearnButton";
import Carousel from "../Carousel/Carousel";

const Landing = () => {
  return (
    <div className="h-max flex flex-col">
      <div className="absolute z-10 w-full h-[90vh]">
        <Image
          className=" object-cover object-top shadow-lg drop-shadow-lg"
          src="/as.png"
          alt="bg"
          fill={true}
        ></Image>
      </div>

      <div className="mainContainer z-40 pt-20 md:pt-0 h-[90vh] justify-center flex flex-col">
        <div className="w-full  sm:w-[563px] sm:h-[301px] text-[--off-white]">
          <h1 className="text-[46px] md:text-[50px] leading-tight  md:leading-[--line-h1-desktop] font-bold">
            Instant collaboration for remote teams
          </h1>
          <p className="text-[18px] leading-[--line-p-dekstop]">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </p>
          <div className="pt-[56px] flex flex-col justify-center gap-y-[16px] sm:justify-start sm:flex-row sm:items-center sm:gap-x-[16px] w-full">
            <Input label="Email"></Input>
            <Button label="Get Early Access" href="/"></Button>
          </div>
        </div>
      </div>
      <div className="mainContainer md:h-[90vh] lg:items-center flex flex-col-reverse lg:flex-row pt-40  ">
        <div className="lg:w-[480px] lg:h-[338px] z-40 gap-y-[48px] flex flex-col">
          <div className="flex flex-col gap-y-[24px] pt-4 sm:pt-0">
            <h1 className="text-[46px] md:text-[50px] leading-tight md:leading-[--line-h1-desktop] font-bold">
              Chats for your distributed teams
            </h1>
            <p className="text-[18px] leading-[--line-p-dekstop]">
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>
          </div>
          <LearnButton />
        </div>
        <div className=" max-w-md md:max-w-xl lg:max-w-full m-auto flex justify-center items-center lg:absolute lg:right-0 lg:w-[50%]">
          <Image
            src="/MockupQuality.png"
            className=""
            width={1050}
            height={650}
            alt="mockup"
          ></Image>
        </div>
      </div>
      <div className="mainContainer h-max justify-center flex flex-col pt-40 gap-y-[120px] ">
        <div className="flex flex-col md:flex-row items-center  gap-x-12 lg:gap-x-20 ">
          <div className=" max-w-md md:max-w-full md:w-[50%]">
            <Image alt="img1" width={565} height={565} src="/img1.png"></Image>
          </div>
          <div className="md:w-[50%] gap-y-12 flex flex-col">
            <div className="flex flex-col gap-y-6 pt-4 sm:pt-0 ">
              <h1 className="text-[46px] md:text-[50px] font-bold leading-tight md:leading-[--line-h1-desktop]">
                Chats for your distributed teams
              </h1>
              <p className="text-[18px] leading-[--line-p-dekstop]">
                Team combines the immediacy of real-time chat with an email
                threading model. With Team, you can catch up on important
                conversations while ignoring irrelevant ones.
              </p>
            </div>
            <div className="">
              <LearnButton />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-x-12 lg:gap-x-20">
          <div className="max-w-md md:max-w-full md:w-[50%]">
            <div className="relative">
              <Image
                alt="img2"
                width={565}
                height={565}
                src="/img2.png"
              ></Image>
              <Image
                className="w-32 md:w-36 lg:w-[190px] absolute bottom-4 right-4"
                alt="mock"
                width={190}
                height={275}
                src="/mock.png"
              ></Image>
            </div>
          </div>
          <div className="md:w-[50%] gap-y-12 flex flex-col">
            <div className="flex flex-col gap-y-6 pt-4 sm:pt-0">
              <h1 className="text-[46px] md:text-[50px] font-bold leading-tight md:leading-[--line-h1-desktop]">
                Choose how you want to work
              </h1>
              <p className="text-[18px] leading-[--line-p-dekstop]">
                In Team, you’ve got all the flexibility to work when, where and
                how it’s best for you. You can easily chat, send audio and video
                clips, or hop on a huddle to talk things out live.
              </p>
            </div>

            <LearnButton />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  gap-x-12 lg:gap-x-20">
          <div className="max-w-md md:max-w-full md:w-[50%]">
            <div className="relative">
              <Image
                alt="img3"
                width={565}
                height={565}
                src="/img3.png"
              ></Image>
              <Image
                className="w-32 md:w-36 lg:w-[190px] absolute bottom-4 left-4"
                alt="mock2"
                width={190}
                height={275}
                src="/mock2.png"
              ></Image>
            </div>
          </div>
          <div className="md:w-[50%] gap-y-12 flex flex-col">
            <div className="flex flex-col gap-y-6 pt-4 sm:pt-0">
              <h1 className="text-[46px] md:text-[50px] font-bold leading-tight md:leading-[--line-h1-desktop]">
                Move faster with your Team tools
              </h1>
              <p className="text-[18px] leading-[--line-p-dekstop]">
                With your other work apps connected to Team, you can work faster
                by switching tabs less. And with powerful tools like Workflow
                Builder, you can automate away routine tasks.
              </p>
            </div>

            <LearnButton />
          </div>
        </div>
      </div>

      <div className="carouselContainer h-[max] pt-40 pb-20 flex flex-col justify-center">
        <div className="flex justify-center w-full ">
          <h1 className=" text-[46px] md:text-[50px] leading-tight md:leading-[--line-h1-desktop] font-bold">
            What people say about Team
          </h1>
        </div>
        <div className=" inline-block sm:hidden ">
          <Carousel page={1} />
        </div>
        <div className="hidden sm:inline-block md:hidden">
          <Carousel page={1} />
        </div>
        <div className="hidden md:inline-block lg:hidden">
          <Carousel page={2} />
        </div>
        <div className="hidden lg:inline-block xl:hidden">
          <Carousel page={3} />
        </div>
        <div className="hidden xl:inline-block">
          <Carousel page={4} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
