import React from "react";

export default function Notified() {
  return (
    <div className="mt-20 ">
      <div>
        <div className="w-[100%] img h-[400px]  bg-zinc-500">
          <div
            className="gap-7 flex items-center
          justify-center flex-col"
            data-aos="fade-up"
          >
            <div>
              <p className="md:text-[25px] text-[20px] white text-white font-medium">
                Get notified on each updates.
              </p>
            </div>
            <div>
              <div className="flex ">
                <input
                  className="md:w-[530px] w-[210px] border-[2px] text-[13px] md:text-[17px] italic px-4 text-white border-white bg-transparent h-12"
                  type="text"
                  placeholder="Enter your email address"
                />
                <div className="md:w-[120px] w-[70px] text-white flex items-center justify-center h-12  border-[2px] border-white">
                  <p className="text-[10px] md:text-[15px] ">SUBSCRIBE</p>
                </div>
              </div>
            </div>
            <div className=" text-white text-center w-[60%] md:w-[40%] text-[15px] md:text-[18px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                commodi veniam doloremque ducimus tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
