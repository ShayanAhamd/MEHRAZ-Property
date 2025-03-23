"use client";
import React, { useState } from "react";
import { AiOutlineContacts } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCopyLight } from "react-icons/pi";
import { BiSolidCopy } from "react-icons/bi";
import Image from "next/image";

const Contact = () => {
  const [copied, setCopied] = useState({ phone: false, email: false });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));

    setTimeout(() => {
      setCopied(prev => ({ ...prev, [type]: false }));
    }, 3000);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/user-side/backgroundContact.png)`,
      }}>
      <div className="relative p-6 w-full container mx-auto">
        {/* Contact Header */}
        <div className="flex flex-col items-center py-5 gap-x-5 w-full md:flex-row mt-5">
          <div className="flex items-center justify-center min-w-[300px] lg:min-w-[500px]">
            <AiOutlineContacts className="text-5xl font-bold text-white mr-3" />
            <h1 className="text-4xl text-white font-bold">Contact Us</h1>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:max-w-[700px] gap-5">
            {/* Phone Section */}
            <div className="flex items-center mt-5 bg-white px-4 py-2 rounded-full shadow-md">
              <FaPhoneAlt className="text-black text-2xl mr-3" />
              <p className="text-gray-800 font-medium flex-1">Phone</p>
              <p className="text-gray-800 font-medium flex-1">
                +92-325-8181842
              </p>
              <div
                className={`flex flex-col items-center cursor-pointer ${
                  copied.phone ? "text-black" : "text-gray-600"
                }`}
                onClick={() => handleCopy("+92-325-8181842", "phone")}>
                {copied.phone ? (
                  <BiSolidCopy className="text-xl mb-1" />
                ) : (
                  <PiCopyLight className="text-xl mb-1" />
                )}
                <p className="text-sm">Copy</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center my-5 bg-white px-10 py-4 rounded-full shadow-md">
              <MdEmail className="text-black text-2xl mr-3" />
              <p className="text-gray-800 font-medium flex-1">Email</p>
              <p className="text-gray-800 font-medium flex-1">
                admin@mehraz.pk
              </p>
              <div
                className={`flex flex-col items-center cursor-pointer ${
                  copied.email ? "text-black" : "text-gray-600"
                }`}
                onClick={() => handleCopy("admin@mehraz.pk", "email")}>
                {copied.email ? (
                  <BiSolidCopy className="text-xl mb-1" />
                ) : (
                  <PiCopyLight className="text-xl mb-1" />
                )}
                <p className="text-sm">Copy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <p className="text-2xl capitalize text-white font-bold mb-4">
          OUR OFFICES
        </p>
        <div className="flex flex-col items-start gap-x-5 w-full md:flex-row justify-center mt-5">
          {/* Map Section */}
          <div className="flex flex-1 w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081782409342!2d144.96305761582242!3d-37.81421787975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0f420ce989d9e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1612385971180!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-72 rounded-lg"></iframe>
          </div>

          {/* Office Cards */}
          <div className="w-full lg:w-1/3 md:w-1/2 flex flex-wrap mt-5 md:mt-0">
            {/* Office 1 */}
            <div className="bg-transparent md:max-w-[250px] rounded-lg shadow-md p-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1693966067602-9ca1f56695c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmdzfGVufDB8fDB8fHww"
                alt="Office 1"
                width={250}
                height={128}
                className="rounded-lg outline outline-white outline-offset-4 p-2 mb-2"
              />
              <div className="flex gap-2 mt-5">
                <p className="text-3xl text-white">
                  <FaMapMarkerAlt />
                </p>
                <div>
                  <h1 className="text-white font-bold">OFFICE 1</h1>
                  <p className="text-gray-400 text-md font-bold">Location</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-md font-bold underline">
                    VIEW IN MAPS
                  </a>
                </div>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-transparent mb-3 md:max-w-[250px] rounded-lg shadow-md p-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1693966067602-9ca1f56695c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmdzfGVufDB8fDB8fHww"
                alt="Office 2"
                width={250}
                height={128}
                className="rounded-lg outline outline-white outline-offset-4 p-2 mb-2"
              />
              <div className="flex gap-2 mt-5">
                <p className="text-3xl text-white">
                  <FaMapMarkerAlt />
                </p>
                <div>
                  <h3 className="text-white font-bold">OFFICE 2</h3>
                  <p className="text-gray-400 text-md font-bold">Location</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-md font-bold underline">
                    VIEW IN MAPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
