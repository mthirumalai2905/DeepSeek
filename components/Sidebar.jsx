"use client";

import { assets } from "@/app/assets/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/contexts/AppContext";
import ChatLabel from "./ChatLabel";

const SideBar = ({ expand, setExpand }) => {
  const { openSignIn } = useClerk();
  const {user} = useAppContext()
  const [openMenu, setOpenMenu] = useState({id:0, open:false});

  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all duration-300 z-50 max-md:fixed max-md:h-screen max-md:top-0 max-md:left-0 ${
        expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      {/* Top Section: Logo and Sidebar Toggle */}
      <div>
        <div
          className={`flex ${
            expand
              ? "flex-row items-center justify-between"
              : "flex-col items-center gap-4"
          }`}
        >
          <Image
            className={expand ? "w-36" : "w-10 mx-auto"}
            src={expand ? assets.logo_text : assets.logo_icon}
            alt="DeepSeek Logo"
          />
          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 rounded-lg cursor-pointer"
          >
            <Image src={assets.menu_icon} alt="Menu" className="md:hidden w-6 h-6" />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="Sidebar Toggle"
              className="hidden md:block w-7 h-7"
            />
          </div>
        </div>

        {/* "New Chat" Button Below Logo */}
        <button
          className={`mt-5 flex items-center justify-center cursor-pointer transition-all duration-200 ${
            expand
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-full"
              : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt="New Chat"
            className={expand ? "w-6" : "w-7"}
          />
          {expand && <p className="text-white text-sm font-medium">New Chat</p>}
        </button>
      </div>

      {/* Recents Section */}
      <div className={`my-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
        <p className="my-1">Recents</p>
      </div>

      <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {/* Bottom Section: Get App & Profile */}
      <div className="mb-6">
        {/* Mobile App Section with QR Code on Hover */}
        <div className="relative group flex items-center cursor-pointer">
          <Image
            className={expand ? "w-5" : "w-6 mx-auto"}
            src={expand ? assets.phone_icon : assets.phone_icon_dull}
            alt="Mobile App"
          />
          {expand && (
            <div className="flex items-center gap-1">
              <span className="text-white text-sm">Get App</span>
              <Image src={assets.new_icon} alt="New" className="w-8 h-8" />
            </div>
          )}

          {/* QR Code - Shown on Hover */}
          <div className="absolute left-12 -top-24 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg">
            <Image src={assets.qrcode} alt="DeepSeek QR Code" className="w-28 h-28" />
          </div>
        </div>

        {/* Profile Section */}
        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center cursor-pointer mt-5 ${
            expand ? "hover:bg-white/10 rounded-lg p-2" : "justify-center w-full"
          }`}
        >
         {
          user ? <UserButton />
          :
          <Image src={assets.profile_icon} alt="Profile" className="w-7" />
         }
          {expand && <span className="text-white ml-2">My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
