import React from "react";
import {
  HiOutlinePlusSm,
  HiOutlineChevronDown,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";
import SearchInput from "../Components/SearchInput";
import ActivityTabs from "../Components/ActivityTabs";
import {
  FiSend,
  FiArrowDownLeft
} from "react-icons/fi";
import AnotherActivity from "../Components/AnotherActivity";

function WalletScreen() {
  return (
    <div className="md:p-10 p-5">
      <div className="md:flex md:justify-between mt-5 mb-5 grid-cols-1">
        <div className=" text-2xl font-bold mb-2">Your Wallet (5)</div>
        <div>
          <a
            href="/#"
            className="rounded-lg inline-flex p-3 text-lg font-medium text-white bg-[#017189] w-full"
          >
            <span className="flex">
              <div className="mt-1">
                <HiOutlinePlusSm size={20} color="white" />
              </div>
              <div className="ml-1">Create New Wallet</div>
            </span>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 ">
        <div className=" p-3 border border-white shadow-lg">
          <div className="flex justify-between">
            <div>
              <SearchInput />
            </div>
            <div className="mt-3 flex " style={{ color: "#017989" }}>
              All
              <span className="">
                {" "}
                <HiOutlineChevronDown size={23} color="#017989" />
              </span>
            </div>
          </div>
          <div>
            <ActivityTabs />
          </div>
        </div>
        <div className="col-span-2 bg-white pt-3 md:pl-14 md:pr-14 pl-3 pr-3 pb-3 shadow-lg">
          <div className="rounded-lg p-3 border border-[#f1f5f9]">
            <div>
              <ol className="text-[#90e1ae] grid grid-cols-12 ">Active</ol>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <div className="font-medium text-xl">EUR Wallet</div>
                <div>EUR</div>
              </div>
              <div>
                <div className="font-semibold text-[#2b4146] md:text-5xl text-xl md:mt-0 mt-2">
                  <span>&euro;</span>2,000,000.50
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5">
            <div className="flex justify-between pr-3 pl-3">
              <div>Ledger Balance</div>
              <div>
                <div className="font-semibold text-[#2b4146]">2,000,000.50</div>
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3">
              <div>Total Incoming</div>
              <div>
                <div className="font-semibold text-[#2b4146]">
                  <span>&euro;</span>2,000,000.50
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5">
            <div className="flex justify-between pr-3 pl-3">
              <div>Blocked Balance</div>
              <div>
                <div className="font-semibold text-[#2b4146]">
                  <span>&euro;</span>0.00
                </div>
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3">
              <div>Total Outgoing</div>
              <div>
                <div className="font-semibold text-[#2b4146]">
                  <span>&euro;</span>5,000,000.50
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between grid-cols-1 mt-5">
            <div className="mb-3">
              <button className="border-2 p-3 md:w-40 w-full border-[#61a7b6] rounded-lg ">
                <span className="inline-flex m-1 text-[#61a7b6]">
                  {" "}
                  <FiSend size={20} color="#61a7b6" className="mr-2" />
                  Payment
                </span>
              </button>
            </div>
            <div className="mb-3">
              <button className="border-2 p-3 md:w-40 w-full border-[#61a7b6] rounded-lg ">
                <span className="inline-flex m-1 text-[#61a7b6]">
                  {" "}
                  <FiArrowDownLeft size={20} color="#61a7b6" className="mr-2" />
                  Pay In
                </span>
              </button>
            </div>
            <div className="mb-3">
              <button className="border-2 p-3 md:w-40 w-full border-[#61a7b6] rounded-lg ">
                <span className="inline-flex m-1 text-[#61a7b6]">
                  {" "}
                  <HiOutlineSwitchHorizontal
                    size={20}
                    color="#61a7b6"
                    className="mr-2"
                  />
                  Exchnage
                </span>
              </button>
            </div>
          </div>
          <div className="mt-3 flex " style={{ color: "#017989" }}>
            More Options
            <span className="">
              {" "}
              <HiOutlineChevronDown size={23} color="#017989" />
            </span>
          </div>
          <div>
         
            <AnotherActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletScreen;
