import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
    FiArrowDownLeft,
    FiArrowUpLeft,
    FiActivity,
  } from "react-icons/fi";
  import AnotherGraph from './AnotherGraph';

function AnotherActivity() {
  return (
    <div>
    <Tabs align="start">
      <TabList className="mt-2">
        <Tab className="md:p-5 p-2  active:bottom-4 ">Activity</Tab>
        <Tab className="md:p-5 p-2 ">Transactions</Tab>
        <Tab className="md:p-5 p-2 ">Invoices</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
        <div className="md:basis-1/2 mt-5">
              <div className="md:flex md:justify-between grid-cols-1">
                <div className="flex justify-start mb-2">
                  <div className="">
                    <div className="w-12 h-12 bg-[#f9fafb] rounded p-2">
                      <FiActivity size={30} className="" color="#d0d5df" />
                    </div>
                  </div>
                  <div className="pl-3 ">
                    <div className="text-[#607174]">Total Transactions</div>
                    <div className="text-xl font-medium">
                      <span>&#36;</span>88,600.00
                    </div>
                  </div>
                </div>
                <div className="flex justify-start mb-2">
                  <div className="">
                    <div className="w-12 h-12 bg-[#f9fafb] rounded p-2">
                      <FiArrowDownLeft size={30} className="" color="#25a955" />
                    </div>
                  </div>
                  <div className="pl-3 ">
                    <div className="text-[#607174]">Pay In</div>
                    <div className="text-xl font-medium">
                      <span>&#36;</span>4,600.00
                    </div>
                  </div>
                </div>
                <div className="flex justify-start mb-2">
                  <div className="">
                    <div className="w-12 h-12 bg-[#f9fafb] rounded p-2">
                      <FiArrowUpLeft size={30} className="" color="#de3434" />
                    </div>
                  </div>
                  <div className="pl-3 ">
                    <div className="text-[#607174]">Pay Out</div>
                    <div className="text-xl font-medium">
                      <span>&#36;</span>72,600.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div>
            {/* <AnotherGraph /> */}
        </div>

          
        </TabPanel>
        <TabPanel>

        </TabPanel>
        <TabPanel>
   
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
  )
}

export default AnotherActivity