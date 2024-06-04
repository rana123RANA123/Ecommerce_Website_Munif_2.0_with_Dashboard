import React from "react";
import Sidebar from "../../(components)/sidebar/Sidebar";
import first from "../../../../public/Group 10.svg";
import second from "../../../../public/seocnd.svg";
import third from "../../../../public/third.svg";
import Image from "next/image";
import Single from "../../(components)/single/Single";

export default function page() {
  return (
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="flex justify-between py-10 px-20 items-center">
          <div>
            <p className="text-[23px]">Hello Evano 👋🏼,</p>
          </div>
          <div className="">
            <input
              type="text"
              className="w-[250px] px-2 h-[40px] rounded-lg border-zinc-500"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex justify-evenly items-center bg-white py-5 w-[87%] mx-auto rounded-xl">
          <div className="flex gap-2">
            <div>
              <Image src={first} alt="First" />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-zinc-500">Total Customers</p>
              </div>
              <div>
                <p className="text-[40px] font-extrabold">5,423</p>
              </div>
              <div>
                <p className="text-[15px] font-normal">
                  <span className="text-green-400 font-extrabold">16%</span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image src={first} alt="First" />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-zinc-500">Total Customers</p>
              </div>
              <div>
                <p className="text-[40px] font-extrabold">5,423</p>
              </div>
              <div>
                <p className="text-[15px] font-normal">
                  <span className="text-green-400 font-extrabold">16%</span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image src={first} alt="First" />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-zinc-500">Total Customers</p>
              </div>
              <div>
                <p className="text-[40px] font-extrabold">5,423</p>
              </div>
              <div>
                <p className="text-[15px] font-normal">
                  <span className="text-green-400 font-extrabold">16%</span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-20 py-8 bg-white">
          <div className="flex justify-between">
            <div>
              <p className="text-[25px] font-bold">All Customers</p>
              <p className="text-green-400">Active Members</p>
            </div>
            <div className="flex gap-4 items-center ">
              <div>
                <input
                  type="text"
                  className="w-[200px] px-2 h-[40px] rounded-lg border-zinc-500"
                  placeholder="Search"
                />
              </div>
              <div>
                <p>
                  Short by : <span className="font-bold">Newest</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">
                  Customer Name
                </p>
              </div>
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">Company</p>
              </div>
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">
                  Phone Number
                </p>
              </div>
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">Email</p>
              </div>
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">Country</p>
              </div>
              <div className="w-[200px] py-3">
                <p className="text-zinc-400 text-[17px] font-medium">Status</p>
              </div>
            </div>
            <hr />
            {/* <div>
              <div className="flex justify-between py-5">
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">Jane Cooper</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">Microsoft</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">(225) 555-0118</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">jane@microsoft.com</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">United States</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium w-[100px] py-1 rounded-md flex items-center justify-center border-[1px] border-green-900 text-green-800 bg-[#83d8c5]">
                    Active
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">Jane Cooper</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">Microsoft</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">(225) 555-0118</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">jane@microsoft.com</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium">United States</p>
                </div>
                <div className="w-[200px] py-3">
                  <p className=" text-[17px] font-medium w-[100px] py-1 rounded-md flex items-center justify-center border-[1px] border-green-900 text-green-800 bg-[#83d8c5]">
                    Active
                  </p>
                </div>
              </div>
            </div> */}
            <Single />
            <Single />
            <Single />
            <Single />
            <Single />
            <Single />
            <Single />
          </div>
        </div>
      </section>
    </div>
  );
}
