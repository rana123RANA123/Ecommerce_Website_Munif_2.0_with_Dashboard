import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import shoes from "../../../../public/images/secondWoman.jpg";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="">
          <div className=" grid p-5 lg:grid-cols-4 sm:grid-cols-2">
            <div className="flex flex-col gap-5 px-3  md:mt-0 md:mx-4  mt-8">
              <p className="text-[20px] font-bold">ABOUT US</p>
              <p className="text-gray-700 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:mt-0 md:mx-4 mt-8">
              <p className="text-[20px] font-bold ">QUICK LINKS</p>
              <p className="text-gray-700">About Us</p>
              <p className="text-gray-700">Services</p>
              <p className="text-gray-700">Testimonials</p>
              <p className="text-gray-700">Contact Us</p>
            </div>
            <div className="flex flex-col gap-3  md:mt-0 md:mx-4 mt-8">
              <p className="text-[20px] font-bold">FOLLOW US</p>
              <div className="flex gap-10">
                <div>
                  <SlSocialFacebook size={17} />
                </div>
                <div>
                  <FaInstagram size={17} />
                </div>
                <div>
                  <LuTwitter size={17} />
                </div>
                <div>
                  <SlSocialLinkedin size={17} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3  md:mt-0 md:mx-4 mt-8">
              <p className="text-[20px] font-bold">FEATURED PRODUCT</p>
              <div>
                <div className="h-[250px] w-[250px]">
                  <Image
                    src={shoes}
                    className="w-[100%] h-[100%]"
                    alt="Shoes"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-normal text-[22px]">Leather Brown Shoe</p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-[19px]">$60.00</p>
                </div>
                <div className="mt-3 h-[35px] w-[130px] cursor-pointer flex items-center hover:bg-white border-[1px] border-black justify-center bg-black">
                  <p className="text-white hover:text-black">Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
