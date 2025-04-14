"use client";
import React, { useRef, useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { FaRegHeart, FaRegComment } from "react-icons/fa6";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";
import { UButton } from "@/components";

const Blog = () => {
  const scrollRef = useRef(null);

  const imgurl =
    "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=pexels-sebastians-731082.jpg&fm=jpg";
  const imgurl1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODtzeDZWkwEn1F3aW_mWETKJfMc99ApYpzA&s";
  const imgurl2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9lIo9D1LEh4_4p0V9LvFk2LKj4WvjqsYw&s";
  const imgurl3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKFV17gJrHDM4f6kscuSQSsrmD0Gc8xeqUQ&s";
  const imgurl4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCY2Lip_gobYp9YRMltd4uvGfeGXLhSL9kgQ&s";

  const cards = [
    { id: 1, img: imgurl, title: "Beautiful Architecture" },
    { id: 2, img: imgurl1, title: "Modern Designs" },
    { id: 1, img: imgurl2, title: "Unique Architecture" },
    { id: 2, img: imgurl3, title: "Modern Building" },
    { id: 2, img: imgurl4, title: "Modern Architecture" },
  ];

  const categories = [
    "All",
    "Trees",
    "Plants",
    "Flowers",
    "Buildings",
    "Materials",
    "Price",
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const visibleCount = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % cards.length);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imgurl})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-4 py-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold bg-opacity-50 p-4 mt-5 rounded">
          <span className="font-thin">MEHRAZ </span> ARCHITECTURE BLOGS
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Explore All The Possible Feels, Wonders Architecture Can <br /> Do In
          Your Life
        </p>
        <Link href="/addBlog">
          {/* <button className="block w-auto uppercase rounded bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg px-16 py-4 mt-5 text-xl font-medium text-black hover:from-yellow-500 hover:to-yellow-600">
            EXPLORE BLOGS
          </button> */}
          <UButton
            text={
              <span className=" flex justify-around items-center">
                <span>EXPLORE</span>
                <span className="font-bold ml-[2px]">BLOGS</span>
              </span>
            }
            className="px-[40px] py-[20px] hover:text-black mt-4"
          />
        </Link>
        <hr className="border-b-2 border-white w-1/2 my-6" />

        <div className="relative flex items-center justify-center mb-8">
          {/* Left Button */}
          <FiChevronLeft
            onClick={scrollLeft}
            size={40}
            className="bg-gray-500 p-2 rounded-full cursor-pointer hover:bg-gray-600"
          />

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 w-full max-w-[700px]">
            {categories.map(category => (
              <button
                key={category}
                className="px-14 py-1 rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black flex-shrink-0">
                {category}
              </button>
            ))}
          </div>

          {/* Right Button */}
          <FiChevronRight
            onClick={scrollRight}
            size={40}
            className="bg-gray-500 p-2 rounded-full cursor-pointer hover:bg-gray-600"
          />
        </div>

        <div className="relative flex items-center mb-8 w-[940px]">
          <div className="overflow-x-auto scrollbar-hide flex space-x-4 px-4 w-full max-w-[940px]">
            {cards.map(card => (
              <div
                key={card.id}
                className="border-2 border-white rounded-lg bg-transparent shadow-lg text-center w-72 flex-shrink-0 p-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-white text-lg font-semibold mt-2">
                  {card.title}
                </h2>
                <div className="flex justify-center gap-6 py-2">
                  <FaRegHeart className="text-white cursor-pointer text-2xl hover:scale-110 transition-transform" />
                  <FaRegComment className="text-white cursor-pointer text-2xl hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
