import React from "react";
import first from "../../../../public/images/firstWoman.jpg";
import second from "../../../../public/images/secondWoman.jpg";
import third from "../../../../public/images/thirdWoman.jpg";
import { FaBeer, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function ContactForm() {
  return (
    <div className="bg-gray-50">
      <div className="py-14">
        <div className="my-8">
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[20px]">Blog</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[46px] font-extrabold">Blog Posts</p>
          </div>
        </div>
        <div className="md:max-w-[600px] py-12 px-9 bg-white w-[100%] mx-auto">
          <div>
            <div>
              <p className="text-[29px]">Contact Form</p>
            </div>
            <div>
              <div className="grid gap-8 sm:grid-cols-2 mt-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[19px]">First Name</p>
                  <input
                    type="text"
                    className="border-[1px] w-[100%] h-12 border-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[19px]">Last Name</p>
                  <input
                    type="text"
                    className="border-[1px] w-[100%] h-12 border-gray-400"
                  />
                </div>
              </div>
              <div className="flex mt-4 flex-col gap-2">
                <p className="text-[19px]">Email</p>
                <input
                  type="text"
                  className="border-[1px] w-[100%] h-12 border-gray-400"
                />
              </div>
              <div className="flex mt-4 flex-col gap-2">
                <p className="text-[19px]">Subject</p>
                <input
                  type="text"
                  className="border-[1px] w-[100%] h-12 border-gray-400"
                />
              </div>
              <div className="flex mt-4 flex-col gap-2">
                <p className="text-[19px]">Message</p>
                <textarea
                  name="message"
                  className="h-[180px] p-4 text-[17px] border-[1px] border-gray-400"
                  id="message"
                  placeholder="Write your notes and questions here..."
                ></textarea>
              </div>
              <div className="mt-4 h-[70px] w-[170px] flex items-center cursor-pointer justify-center bg-black flex-col gap-2">
                <p className="text-[17px] font-semibold text-white">
                  Send Message
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
