import React from "react";
import * as Icons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";
import * as TbIcons from "react-icons/tb";
import servicesData from "../../json/servicesData.json";

const iconMap = {
  FaBusinessTime: Icons.FaBusinessTime,
  TbEyeClosed: TbIcons.TbEyeClosed,
  IoSpeedometerOutline: IoIcons.IoSpeedometerOutline,
  IoBagCheckSharp: IoIcons.IoBagCheckSharp,
  GrNotes: GrIcons.GrNotes,
  TbClick: TbIcons.TbClick,
};

export default function Services() {
  return (
    <div>
      <div className="my-12">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[16px] md:ext-[20px]">
              OUR SERVICES
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[24px] md:text-[46px] font-extrabold">
              We Offer Services
            </p>
          </div>
        </div>
        <div
          className="md:w-[80%] w-[100%] mx-auto flex mt-5 justify-center items-center flex-wrap"
          data-aos="fade-up"
        >
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6" key={index}>
                <div className="flex gap-4">
                  <div>
                    <IconComponent size={55} color="red" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[23px] ">{service.title}</p>
                    <p className="text-[18px] w-[100%] sm:w-[80%]">
                      {service.description}
                    </p>
                    <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
