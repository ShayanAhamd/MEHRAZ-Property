"use client";
import React from "react";
import { FaHeart, FaShareAlt, FaTimes, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/";

const OpenBlog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col md:flex-row">
        {/* Left Side - Main Image */}
        <div className="w-full md:w-2/3 relative">
          <img
            src="/your-image-url.jpg"
            alt="Blog main"
            className="w-full h-full object-cover rounded-l-lg"
          />
          <span className="absolute bottom-2 left-2 text-white text-sm">
            dolor sit amet!
          </span>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/3 p-6 relative flex flex-col">
          {/* Close Icon */}
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>

          {/* Image Gallery */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[1, 2, 3].map(item => (
              <div key={item} className="relative">
                <img
                  src="/your-thumbnail-url.jpg"
                  alt="Thumbnail"
                  className="w-20 h-16 object-cover rounded-md cursor-pointer border border-gray-300"
                />
                <span className="absolute bottom-1 left-1 text-white text-xs">
                  dolor sit amet
                </span>
              </div>
            ))}
            <FaChevronRight
              className="text-gray-500 cursor-pointer"
              size={20}
            />
          </div>

          {/* Blog Content */}
          <h2 className="text-xl font-bold mt-4">BLOG #1</h2>
          <p className="text-gray-600 text-sm mt-2 max-h-40 overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur...
          </p>
          <span className="text-blue-500 cursor-pointer">Read More</span>

          <Button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            GO TO DESIGNS PAGEUTILITY
          </Button>

          {/* Icons */}
          <div className="flex justify-between mt-4 text-gray-500">
            <FaHeart size={20} className="cursor-pointer hover:text-red-500" />
            <FaShareAlt
              size={20}
              className="cursor-pointer hover:text-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBlog;
