import React from "react";
import WelcomeMessage from "../Components/WelcomeMessage";
import SearchInput from "../Components/SearchInput";
import UserName from "../Components/UserName";
import RoundedImage from "../Components/RoundedImage";
import ActivityGraph from "../Components/ActivityGraph";
import { HiCreditCard, HiOutlineCurrencyDollar, HiOutlineSwitchVertical,HiOutlineChevronDown, HiOutlineLink,HiOutlineChip, HiOutlineCash } from "react-icons/hi";

function WelcomeScreen() {
  return (
    <div className="md:p-10 p-5">
      {/* <div className="grid grid-cols-3 gap-4">
        <div className="text-3xl">
          <WelcomeMessage />
        </div>
        <div className="col-span-2">
          <div className="flex justify-around ...">
            <div>
              <SearchInput />
            </div>
            <div>
              <UserName />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-between mt-5 mb-5">
        <div className=" text-xl font-bold ">Wallet (5)</div>
        <div style={{ color: "#017989" }}>View all wallets</div>
      </div>

      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <div className="w-82 h-40 bg-[#FFF6E6] rounded-xl p-8">
          <div className="flex justify-between">
            <div>
              <div className="font-medium text-xl">Personal Account</div>
              <div>USD</div>
            </div>

            <RoundedImage />
          </div>
          <div className="text-3xl font-bold mt-5">
            <span>&#36;</span>10,250.00
          </div>
        </div>
        <div className="w-82 h-40 bg-[#FBF1F0] rounded-xl p-8">
          <div className="flex justify-between">
            <div>
              <div className="font-medium text-xl">EUR Wallet</div>
              <div>EUR</div>
            </div>

            <RoundedImage />
          </div>
          <div className="text-3xl font-bold mt-5">
            <span>&euro;</span>4000.53
          </div>
        </div>
        <div className="w-82 h-40 bg-[#DDECEF] rounded-xl p-8">
          <div className="flex justify-between">
            <div>
              <div className="font-medium text-xl">School Fees</div>
              <div>GBP</div>
            </div>

            <RoundedImage />
          </div>
          <div className="text-3xl font-bold mt-5">
            <span>&#163;</span>50.00
          </div>
        </div>
      </div>
      <div className="text-xl font-bold mt-10 mb-2">Quick Links</div>
      <div className="mt-2 mb-5">
        Your frequently used actions for easy access
      </div>

      <div className="flex flex-wrap">
        <div className="w-32 h-36 bg-white border-[#f1f5f9] border rounded mt-3">
          <div className="w-12 h-12 bg-[#f97316] rounded-md p-2 mx-auto mt-3">
            <HiCreditCard size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Add New</div>
          <div className="text-center">Wallet</div>
        </div>

        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#005061] rounded-md p-2 mx-auto mt-3">
            <HiCreditCard size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Add New</div>
          <div className="text-center">Card</div>
        </div>

        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#f59e0b] rounded-md p-2 mx-auto mt-3">
            <HiOutlineCurrencyDollar size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Balance</div>
          <div className="text-center">Exchange</div>
        </div>
        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#5eead4] rounded-md p-2 mx-auto mt-3">
            <HiOutlineSwitchVertical size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Transfer To</div>
          <div className="text-center">Account</div>
        </div>
        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#9333ea] rounded-md p-2 mx-auto mt-3">
            <HiOutlineChip size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Generate</div>
          <div className="text-center">Voucher</div>
        </div>
        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#ffcb00] rounded-md p-2 mx-auto mt-3">
            <HiOutlineCash size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Mobile</div>
          <div className="text-center">Money</div>
        </div>
        <div className="w-32 h-36 bg-white m-3 border-[#f1f5f9] border rounded text-center">
          <div className="w-12 h-12 bg-[#f43f5e] rounded-md p-2 mx-auto mt-3">
            <HiOutlineLink size={30} className="" color="white" />
          </div>
          <div className="mt-2 text-center">Payment</div>
          <div className="text-center">Link</div>
        </div>
      </div>
 

      <div className="flex justify-between mt-5 mb-5">
        <div className="flex">
         <div className=" text-xl font-bold">
           Activity
         </div>
         <div className="pl-10 flex mt-1" style={{ color: "#017989" }}>
           Month
           <span className="mt-1 pl-2"><HiOutlineChevronDown size={18} /></span>
         </div>
        </div>
        {/* <div className="flex justify-around">
        <div className=" text-xl font-bold ">Activity</div>
        <div className=" text-xl font-bold ">Wallet (5)</div>
        </div> */}
        
        <div style={{ color: "#017989" }}>View Transaction History</div>
      </div>

      <div>
          {/* <ActivityGraph /> */}
      </div>
    </div>
  );
}

export default WelcomeScreen;
