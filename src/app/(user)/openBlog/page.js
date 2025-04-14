"use client";
import React from "react";
import { FaHeart, FaShareAlt, FaTimes, FaChevronRight } from "react-icons/fa";

const OpenBlog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4 relative">
      {/* Side Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4 text-gray-600 z-10">
        <FaTimes
          size={24}
          className="cursor-pointer hover:text-black border rounded-full p-1 bg-white"
        />
        <FaHeart size={24} className="cursor-pointer hover:text-red-500" />
        <FaShareAlt size={24} className="cursor-pointer hover:text-blue-500" />
      </div>

      {/* Main Grid Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl overflow-hidden grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* Left Side - Main Image */}
        <div className="relative col-span-2 lg:col-span-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlForBZZiJY5O1YlonXEBPLNkfy64Z3W2_wg&s"
            alt="Blog main"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
            dolor sit amet!
          </span>
        </div>

        {/* Right Side - Blog Content */}
        <div className="p-6 flex flex-col justify-between col-span-1">
          {/* Gallery */}
          <div className="flex space-x-2 overflow-x-auto mb-4">
            {[1, 2, 3].map(item => (
              <div key={item} className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEN8KTulxdVne_7UyLxrMFervEAFn1Doy_g&s"
                  alt={`Thumbnail ${item}`}
                  className="w-24 h-16 object-cover rounded-md border border-gray-300 cursor-pointer"
                />
                <span className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                  dolor sit amet
                </span>
              </div>
            ))}
            <div className="flex items-center">
              <FaChevronRight
                className="text-gray-600 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* Blog Text */}
          <div>
            <h2 className="text-xl font-bold mb-2">BLOG #1</h2>
            <p className="text-gray-700 text-sm overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur...
            </p>
            <span className="text-blue-500 text-sm mt-1 inline-block cursor-pointer">
              Read More
            </span>
          </div>

          {/* CTA Button */}
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-full w-fit hover:bg-gray-900">
            GO TO DESIGNS PAGE UTILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenBlog;
