import React from "react";
import Image from "next/image";
import teamData from "../../json/teamData.json";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function TeamLeaderShip() {
  return (
    <div>
      <div className="my-14">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[20px]">TEAM</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[46px] font-extrabold">Leadership</p>
          </div>
        </div>
        <div data-aos="fade-up" className="md:w-[80%] w-[100%] mx-auto">
          <div className="flex pl-3 md:pl-22 my-10 items-center justify-around flex-wrap">
            {teamData.map((member) => (
              <div key={member.id} className="lg:w-1/3 md:w-1/2 my-6">
                <div className="w-[97%] flex items-center justify-center flex-col">
                  <Image
                    src={member.image}
                    className="md:w-[80%] w-[80%] flex items-center justify-center h-[60%] md:h-[80%]"
                    alt={member.name}
                    width={500}
                    height={500}
                  />
                  <p className="py-3 text-center text-[18px]">{member.name}</p>
                  <p className="pb-2 text-center text-gray-400 text-[16px]">
                    {member.position}
                  </p>
                  <p className="text-center md:w-[100%] w-[70%]">
                    {member.description}
                  </p>
                  <div className="mt-3">
                    <div className="flex gap-1">
                      <a
                        href={member.social.facebook}
                        className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full"
                      >
                        <SlSocialFacebook size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full"
                      >
                        <LuTwitter size={20} />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full"
                      >
                        <SlSocialLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
