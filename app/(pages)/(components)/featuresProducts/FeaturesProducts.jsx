import React from "react";
import firstImage from "../../../../public/images/firstWoman.jpg";
import secondImage from "../../../../public/images/secondWoman.jpg";
import Image from "next/image";

export default function FeaturesProducts() {
  return (
    <div className="md:bg-gray-50 py-14">
      <div>
        <div className="md:max-w-[35%] w-[80%] flex items-center mx-auto justify-center py-14">
          <div className="md:ml-0">
            <p className="md:text-[19px] text-[15px] text-center text-gray-500 font-semibold">
              AWESOME PRODUCTS
            </p>
            <p className="font-extrabold text-[32px] md:text-[45px] text-center">
              Featured Products
            </p>
            <p className="text-center text-[16px] md:text-[18px] text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div className="md:max-w-[70%] w-[100%] mt-5 md:px-0 px-4 bg-white mx-auto py-14">
          <div className="grid md:grid-cols-2">
            <div className="px-10 py-10">
              <div>
                <Image src={firstImage} className="" alt="" />
              </div>
            </div>
            <div className="py-10">
              <div className="">
                <p className="text-[30px] font-extrabold">About This Product</p>
              </div>
              <div className="mt-2 px-2">
                <p className="md:text-[20px] text-center sm:text-left text-[16px] text-zinc-500 font-normal">
                  Et tempora id nostrum saepe amet doloribus deserunt totam
                  officiis cupiditate asperiores quasi accusantium voluptatum
                  dolorem quae sapiente voluptatem ratione odio iure blanditiis
                  earum fuga molestiae alias dicta perferendis inventore!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus soluta assumenda sed optio, error at?
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[25px]  font-bold">Price:</p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] font-normal">
                  <del className="text-zinc-600">$269.00 </del>{" "}
                  <span className="ml-1"> $69.00</span>
                </p>
              </div>
              <div className="flex gap-4 mt-7">
                <div className="sm:w-[170px] w-[120px] h-[33px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                  <p className="p-2 font-semibold">View Details</p>
                </div>
                <div className="md:w-[170px] w-[120px] h-[33px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                  <p className="p-2 font-semibold">Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] w-[100%] mt-5 md:px-0 px-4 bg-white mx-auto py-14">
          <div className="grid md:grid-cols-2">
            <div className="py-10">
              <div className="">
                <p className="text-[30px] font-extrabold">About This Product</p>
              </div>
              <div className="mt-2 px-2">
                <p className="md:text-[20px] text-center sm:text-left text-[16px] text-zinc-500 font-normal">
                  Et tempora id nostrum saepe amet doloribus deserunt totam
                  officiis cupiditate asperiores quasi accusantium voluptatum
                  dolorem quae sapiente voluptatem ratione odio iure blanditiis
                  earum fuga molestiae alias dicta perferendis inventore!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus soluta assumenda sed optio, error at?
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[25px]  font-bold">Price:</p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] font-normal">
                  <del className="text-zinc-600">$269.00 </del>{" "}
                  <span className="ml-1"> $69.00</span>
                </p>
              </div>
              <div className="flex gap-4 mt-7">
                <div className="sm:w-[170px] w-[120px] h-[33px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                  <p className="p-2 font-semibold">View Details</p>
                </div>
                <div className="md:w-[170px] w-[120px] h-[33px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                  <p className="p-2 font-semibold">Add To Cart</p>
                </div>
              </div>
            </div>
            <div className=" px-10 py-10">
              <div>
                <Image src={secondImage} className="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
