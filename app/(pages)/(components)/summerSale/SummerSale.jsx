import React from "react";

export default function SummerSale() {
  return (
    <div className="mt-20">
      <div
        className="w-[100%] img h-[600px] py-20 gap-5 flex items-center
          justify-center flex-col bg-zinc-500"
      >
        <div>
          <p className="text-[15px] white text-white font-normal">
            SPECIAL PROMO
          </p>
        </div>
        <div>
          <p className="text-[40px] white text-white font-extrabold">
            Summer Sale
          </p>
        </div>
        <div className=" text-white text-center w-[60%] mt-6 md:w-[40%] text-[15px] md:text-[18px]">
          <p>
            Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
            eveniet aut consequatur laboriosam ipsam.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4 ">
              <div className="md:w-[90px] w-[50px] flex flex-col justify-center items-center md:h-[120px] h-[90px] rounded-lg bg-white">
                <div>
                  <p className="md:text-[44px] text-[23px] text-teal-400">00</p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[14px] text-gray-400">
                    weeks
                  </p>
                </div>
              </div>
              <div className="md:w-[90px] w-[50px] flex flex-col justify-center items-center md:h-[120px] h-[90px] rounded-lg bg-white">
                <div>
                  <p className="md:text-[44px] text-[23px] text-teal-400">00</p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[14px] text-gray-400">
                    days
                  </p>
                </div>
              </div>
              <div className="md:w-[90px] w-[50px] flex flex-col justify-center items-center md:h-[120px] h-[90px] rounded-lg bg-white">
                <div>
                  <p className="md:text-[44px] text-[23px] text-teal-400">00</p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[14px] text-gray-400">hr</p>
                </div>
              </div>
              <div className="md:w-[90px] w-[50px] flex flex-col justify-center items-center md:h-[120px] h-[90px] rounded-lg bg-white">
                <div>
                  <p className="md:text-[44px] text-[23px] text-teal-400">00</p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[14px] text-gray-400">
                    min
                  </p>
                </div>
              </div>
              <div className="md:w-[90px] w-[50px] flex flex-col justify-center items-center md:h-[120px] h-[90px] rounded-lg bg-white">
                <div>
                  <p className="md:text-[44px] text-[23px] text-teal-400">00</p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[14px] text-gray-400">
                    sec
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[180px] w-[140px] h-[47px] mt-10 cursor-pointer text-white hover:bg-white bg-transparent hover:text-black  flex items-center border-[2px] border-white justify-center">
              <p className="p-2 font-semibold">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
