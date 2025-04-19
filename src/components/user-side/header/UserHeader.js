"use client";
import React, { useState } from "react";
import { bookmarkFilledIcon, bookmarkIcon, logo2Img } from "@/assets";
import { CiChat1 } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { UserHeaderMeetBtn, UserHeaderMenu } from "@/components";
const UserHeader = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "👋 Hello! How can we assist you today?" },
    { type: "user", text: "I have a question about my order." },
    { type: "bot", text: "Sure! Please share your order ID." },
  ]);

  return (
    <>
      <header className="bg-gradient-to-r from-accent-dark-blue via-accent-dark-blue to-accent-sea-green py-4 h-[83px] md:h-[69px] sm:h-[54px] flex items-center">
        <div className="w-full container mx-auto px-8 sm:px-4 flex items-center justify-between">
          <Link href="/" className="translate-y-0 sm:-translate-y-1">
            <Image
              src={logo2Img}
              priority={true}
              alt="logo"
              className="h-[39.6px] w-[337.7px] lg:w-auto md:h-[8.8px] sm:h-[6.6px] xs:h-[5.5px]"
            />
          </Link>
          <div className="flex items-center gap-10  sm:gap-4">
            <Link href="/" className="group relative w-8 h-8 block sm:hidden">
              <Image
                src={bookmarkIcon}
                alt="bookmark"
                priority={true}
                width={28}
                height={28}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-800 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={bookmarkFilledIcon}
                alt="bookmark"
                priority={true}
                width={28}
                height={28}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-800 opacity-0 group-hover:opacity-100"
              />
            </Link>
            <div className="flex items-center gap-9">
              <UserHeaderMeetBtn />
              <button
                onClick={() => setIsChatOpen(prev => !prev)}
                className="inline-flex sm:hidden items-center gap-1 text-white border-2 border-white py-0.5 px-3 rounded hover:text-accent-dark-blue hover:bg-white transition-colors duration-300"
                // className="absolute bottom-[27px] right-[25px] z-[999] p-[13px] rounded-[42px] bg-red-500 inline-flex items-center gap-1 text-white border-2 border-white hover:text-accent-dark-blue hover:bg-white transition-colors duration-300"
              >
                <CiChat1 size={23} strokeWidth={1.3} />
                <span className="sm-text">CHAT</span>
              </button>
            </div>
            {/* <button className="hidden sm:inline text-white">
              <CiChat1 size={20} className="h-6 w-auto stroke-1" />
            </button> */}
            <UserHeaderMenu />
          </div>
        </div>
      </header>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-0 right-0 w-[50vw] h-[100vh] bg-[#e6e6e6] rounded-3xl shadow-2xl z-[1000] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white border-b font-semibold text-black text-center">
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-black rounded-sm" />
              <span>GROUP ID #456623</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 text-lg">
              <span>📞</span>
              <span>👥</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-sm">
            {/* Bot Message */}
            <div className="flex items-end gap-2">
              <img
                src="/avatar-bot.jpg"
                alt="bot"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-xl rounded-bl-none max-w-xs">
                  Sure, what seems to be the problem?
                </div>
                <div className="text-[10px] text-gray-600 mt-1">12:30 pm</div>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <img
                src="/avatar-bot.jpg"
                alt="bot"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-xl rounded-bl-none max-w-xs">
                  Can you share more details about the issue?
                </div>
                <div className="text-[10px] text-gray-600 mt-1">12:30 pm</div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end items-end gap-2">
              <div>
                <div className="bg-white text-black px-4 py-2 rounded-xl rounded-br-none max-w-xs shadow">
                  Hi, can you help me with this issue?
                </div>
                <div className="text-[10px] text-gray-600 text-right mt-1">
                  12:30 pm
                </div>
              </div>
              <img
                src="/avatar-user.jpg"
                alt="user"
                className="w-8 h-8 rounded-full"
              />
            </div>

            <div className="flex justify-end items-end gap-2">
              <div>
                <div className="bg-white text-black px-4 py-2 rounded-xl rounded-br-none max-w-xs shadow">
                  I am facing some trouble with deployment.
                </div>
                <div className="text-[10px] text-gray-600 text-right mt-1">
                  12:30 pm
                </div>
              </div>
              <img
                src="/avatar-user.jpg"
                alt="user"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center px-4 py-2 bg-white border-t gap-3">
            <span className="text-2xl">😊</span>
            <input
              type="text"
              placeholder="TYPE HERE..."
              className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none"
            />
            <span className="text-xl">📎</span>
            <span className="text-xl">📷</span>
            <span className="text-xl">🎤</span>
          </div>
        </div>
      )}
    </>
  );
};

export default UserHeader;
