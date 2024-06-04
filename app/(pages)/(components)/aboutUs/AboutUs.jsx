import React from "react";
import first from "../../../../public/images/aboutUsFirst.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div>
        <div className="md:w-[80%] w-[100%] py-5 mx-auto">
          <div className="lg:grid gap-8 grid-cols-3">
            <div className="col-span-2 p-10">
              <Image src={first} className="relative w-[96%]" alt="First" />
              {/* <div className="flex justify-end items-end">
                <div className="w-[470px] mt-[630px] h-[110px] flex items-center justify-center absolute top-1 bg-green-400 ">
                  <p className=" text-[46px] text-center text-white font-extrabold">
                    Trusted Merchant
                  </p>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col gap-3 px-10 justify-center">
              <div>
                <p className="font-semibold text-[21px] text-zinc-500">
                  MERCHANT COMPANY
                </p>
              </div>
              <div>
                <p className="font-bold text-[37px] ">About Us</p>
              </div>
              <div>
                <p className="font-light text-[19px] pe-16">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  fuga ipsa, repellat blanditiis nihil, consectetur.
                  Consequuntur eum inventore, rem maxime, nisi excepturi ipsam
                  libero ratione adipisci alias eius vero vel!
                </p>
              </div>
              <div className="w-[140px] h-[33px] mt-4 text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                <p className="p-2 font-semibold">LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
