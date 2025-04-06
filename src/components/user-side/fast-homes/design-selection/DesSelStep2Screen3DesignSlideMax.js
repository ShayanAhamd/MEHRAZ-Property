"use client";
import {
  bookmarkGrayFilledIcon,
  bookmarkGrayIcon,
  circleCheckIcon,
  shareGrayIcon,
} from "@/assets";
import Link from "next/link";
import Image from "next/image";
import { UButton, ULinkButton } from "@/components";
import { useState } from "react";
import Chart from "react-google-charts";
import {
  FaRegComment,
  FaRegHeart,
  FaRegShareFromSquare,
} from "react-icons/fa6";

const pieChartOptions = {
  legend: "none",
  pieSliceText: "label",
  backgroundColor: "transparent",
  pieSliceBorderColor: "transparent",
  tooltip: {
    textStyle: { color: "#000" },
    showColorCode: true,
  },
};

const pieChartData = [
  ["service", "cost"],
  ["Service 1", 2000000],
  ["Service 2", 500000],
  ["Service 3", 1000000],
  ["Service 4", 700000],
  ["Service 5", 1000000],
];

const DesSelStep2Screen3DesignSlideMax = ({
  design,
  isLocalStorageBookmarked,
  bookmarkLocalStorageHandler,
  selectDesignHandler,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(isLocalStorageBookmarked);
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      <div
        key={design.id}
        className="h-full flex flex-col rounded-lg shadow-btn border border-black border-opacity-25 overflow-hidden">
        {/* Image/Chart Section - Now Second & Full Width */}
        <div className="h-full w-full min-h-[306px] relative flex-grow">
          {showChart ? (
            <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-r from-accent-dark-blue to-accent-sea-green">
              <Chart
                className="h-full w-full"
                chartType="PieChart"
                data={pieChartData}
                options={{
                  ...pieChartOptions,
                  width: "100%",
                  height: "100%",
                }}
              />
              <span className="absolute bottom-0 right-0 text-white/50 uppercase text-lg px-4 py-1 border-t border-t-white/50">
                construction cost division
              </span>
            </div>
          ) : (
            <Image
              src={design.image}
              width={500}
              height={500}
              className="h-full w-full object-cover"
              alt="Project image"
            />
          )}
          <div className="absolute w-full bottom-0 right-0 px-2 hidden lg:flex justify-end items-center gap-1 bg-gradient-to-r from-white/0 from-30% to-white to-80%">
            <button
              className="p-2"
              onClick={() => {
                bookmarkLocalStorageHandler();
                setIsBookmarked(prevState => !prevState);
              }}>
              <Image
                src={isBookmarked ? bookmarkGrayFilledIcon : bookmarkGrayIcon}
                width={28}
                height={28}
                className="w-6 h-auto"
                alt="Bookmark"
              />
            </button>
            <button
              onClick={() => {
                navigator.share({
                  title: "Fast Homes",
                  text: design.description,
                  url: window.location.href,
                });
              }}
              className="p-2">
              <Image
                src={shareGrayIcon}
                width={32}
                height={32}
                className="w-7 h-auto"
                alt="Share"
              />
            </button>
          </div>
        </div>
        {/* Project Details Section - Now First & Full Width */}
        <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-1 overflow-y-auto flex-grow min-h-[300px]">
          <div className="text-black/90 px-5 pt-4 sm:px-2">
            <h1 className="text-xl xl:text-lg sm:text-base font-bold text-center uppercase">
              project details
            </h1>
          </div>
          <p className="text-lg xl:text-base sm:text-sm text-justify mt-3 px-5 sm:px-2">
            {design.description}
          </p>
          <div className="flex bg-[#6C6C6C] py-[9px]">
            <span className="w-[40%] underline text-white pl-[81px] font-bold cursor-pointer">
              <Link href="/openBlog">READ MORE</Link>
            </span>
            <span className="w-[20%]">
              <FaRegHeart className="text-white cursor-pointer text-2xl hover:scale-110 transition-transform" />
            </span>
            <span className="w-[20%]">
              <FaRegComment className="text-white cursor-pointer text-2xl hover:scale-110 transition-transform" />
            </span>
            <span className="w-[20%]">
              <FaRegShareFromSquare className="text-white cursor-pointer text-2xl hover:scale-110 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesSelStep2Screen3DesignSlideMax;
