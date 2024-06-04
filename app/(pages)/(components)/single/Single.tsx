import React from "react";

export default function Single() {
  return (
    <div>
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
    </div>
  );
}
