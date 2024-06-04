import React from "react";
import first from "../../../../public/images/secondMan.jpg";
import Image from "next/image";

export default function Testimonials({ image, ownerName }) {
  return (
    <div>
      <div>
        <div className="sm:w-[50%] w-[100%] mx-auto py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="sm:text-[16px] text-[12px] text-zinc-500 font-semibold">
              PEOPLE SAYS
            </p>
            <p className="sm:text-[48px] text-[22px] font-bold">Testimonials</p>
            <div className="w-[200px] h-[200px] rounded-full mt-14">
              <Image src={image} className="rounded-full" alt="First" />
            </div>
            <p className="text-center font-normal text-zinc-400 text-[17px] sm:text-[25px] px-7 mt-6">
              <i>
                {" "}
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde iusto.”
              </i>
            </p>
            <p className="text-center font-bold text-[18px] mt-6">
              {ownerName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
