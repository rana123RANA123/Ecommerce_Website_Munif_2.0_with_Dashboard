import React from "react";
import { FaBeer, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function TopBar() {
  return (
    <div>
      <div className="max-w-[100%] bg-gray-50 h-16 flex justify-between px-3 md:0 md:justify-around items-center">
        <div className="flex gap-1">
          <div className="w-9 h-9 bg-black border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <SlSocialFacebook color="white" size={20} />
            </div>
          </div>
          <div className="w-9 h-9 text- bg-black border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <LuTwitter color="white" size={20} />
            </div>
          </div>
          <div className="w-9 h-9 bg-black border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <FaInstagram color="white" size={20} />
            </div>
          </div>
          <div className="w-9 h-9 bg-black border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <SlSocialLinkedin color="white" size={20} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt color="red" size={14} />
              <p className="md:flex hidden">(+1) 234 5678 9101</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineEmail color="red" size={20} />
              <p className="md:flex hidden ">shop@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
