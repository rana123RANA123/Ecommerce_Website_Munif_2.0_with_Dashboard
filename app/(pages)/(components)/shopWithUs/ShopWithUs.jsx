import React from "react";

export default function ShopWithUs() {
  return (
    <div className="">
      <div>
        <div className="w-[100%] flex items-center smd:px-0 px-6 justify-center imgTop h-[400px] sm:h-[700px] py-20 bg-zinc-500">
          <div>
            <div>
              <p className="sm:text-[70px] text-[30px] white text-white font-extrabold">
                Shop With Us
              </p>
            </div>
            <div className=" text-white w-[80%] md:w-[60%] text-[15px] md:text-[19px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                officia.
              </p>
            </div>
            <div className="mt-2 flex gap-1">
              <div className=" gap-4">
                <div className="md:w-[160px] w-[120px] h-[47px] mt-10 cursor-pointer text-white hover:bg-white bg-transparent hover:text-black  flex items-center border-[2px] border-white justify-center">
                  <p className="p-2 font-semibold  text-[12px] sm:text-[17px]">
                    SHOP NOW
                  </p>
                </div>
              </div>
              <div className=" gap-4">
                <div className="md:w-[210px] w-[150px] h-[47px] mt-10 cursor-pointer text-black hover:bg-transparent bg-white hover:text-white  flex items-center border-[2px] border-white justify-center">
                  <p className="p-2 font-semibold text-[12px] sm:text-[17px]">
                    CLUB MEMBERSHIP
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
