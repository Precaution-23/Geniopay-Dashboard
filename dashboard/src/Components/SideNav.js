import React from "react";
import { FiEye } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { BsStarHalf, BsMegaphone } from "react-icons/bs";

function SideNav({ pages }) {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="basis-1/4 hidden md:block bg-[#017189]">
          <div className="p-10">
            <img src="./logo.png" className="bg-white" />{" "}
          </div>

          <div className="rounded-[8px] md:h-[202px] md:w-[246px] bg-[#2B899D] mx-auto">
            <div className="flex justify-between p-5 pb-0">
              <div className="flex justify-start mb-2">
                <div className="">
                  <div className="w-[32px] h-[32px] bg-[white] rounded p-2 mt-1">
                    <BiWallet size={15} className="" color="#14B8A6" />
                  </div>
                </div>
                <div className="pl-3 ">
                  <div className="text-[white] font-[400] text-[14px]">
                    Wallet Balance
                  </div>
                  <div className="text-[16px] font-[800] text-white flex">
                    <span>&#36;</span>15,001.00
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FiEye size={20} color="white" />
              </div>
            </div>
            <div className="flex justify-between pr-5 pl-5 pt-2">
              <div className="flex justify-start mb-2">
                <div className="">
                  <div className="w-[32px] h-[32px] bg-[white] rounded p-2 mt-1">
                    <BsStarHalf size={15} className="" color="#F59E0B" />
                  </div>
                </div>
                <div className="pl-3 ">
                  <div className="text-[white] font-[400] text-[14px]">
                    Awarded Points
                  </div>
                  <div className="text-[16px] font-[800] text-white flex">
                    35
                  </div>
                </div>
              </div>
              <div className="mt-3">
              </div>
            </div>

            <div className="flex justify-between p-5 pt-2">
              <div>
              <button className="md:w-[99.49px] w-full h-[40px] bg-[#FDA4AF] rounded-[4px]">
                <span className="inline-flex m-1 text-[white]">
                  Pay-In
                </span>
              </button>
              </div>
              <div>
              <button className="md:w-[99.49px] w-full h-[40px] bg-[white] rounded-[4px]">
                <span className="inline-flex m-1 text-[#2B899D]">
                  Pay-Out
                </span>
              </button>
              </div>
            </div>

            <div className="rounded-[8px] md:h-[202px] md:w-[246px] bg-[#FFF5E9] text-center mx-auto mt-5">
                <div className="flex justify-start p-5">
                  <div>
                    <BsMegaphone size={40} />
                  </div>
                  <div>
                    2
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="">{pages}</div>
      </div>
    </div>
  );
}

export default SideNav;
