import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RoundedImage from "./RoundedImage";

function ActivityTabs() {
  return (
    <div>
      <Tabs align="start">
        <TabList className="mt-2">
          <Tab className="md:p-3 p-2  active:bottom-4 ">Active (3)</Tab>
          <Tab className="md:p-3 p-2 ">Inactive (2)</Tab>
          <Tab className="md:p-3 p-2 ">Closed (0)</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="bg-[#eef7f9] p-4 rounded-lg h-24 mb-3">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <div>
                    <RoundedImage />
                  </div>

                  <div className="ml-2">
                    <div className="font-semibold">EUR Wallet</div>
                    <div>EUR</div>
                  </div>
                </div>

                <div className="">
                <div className="font-semibold text-[#2b4146]"><span>&euro;</span>2,000,000.50</div>
                    <div className=" float-right ">Default</div>
                </div>

              </div>
            </div>
            <div className="focus:bg-[#eef7f9] p-4 rounded-lg h-24 mb-3">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <div>
                    <RoundedImage />
                  </div>

                  <div className="ml-2">
                    <div className="font-semibold">Personal Account</div>
                    <div>USD</div>
                  </div>
                </div>

                <div className="">
                <div className="font-semibold text-[#2b4146] mt-3"><span>&#36;</span>10,250.00</div>
                    <div className=" float-right "></div>
                </div>

              </div>
            </div>
            <div className="focus:bg-[#eef7f9] p-4 rounded-lg h-24 mb-3">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <div>
                    <RoundedImage />
                  </div>

                  <div className="ml-2">
                    <div className="font-semibold">School Savings</div>
                    <div>GBP</div>
                  </div>
                </div>

                <div className="">
                <div className="font-semibold text-[#2b4146] mt-3"><span>&#163;</span>500.00</div>
                    <div className=" float-right "></div>
                </div>

              </div>
            </div>
            
          </TabPanel>
          <TabPanel>
          <div className="bg-[#eef7f9] p-4 rounded-lg h-24">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <div>
                    <RoundedImage />
                  </div>

                  <div className="ml-2">
                    <div className="font-semibold">EUR Wallet</div>
                    <div>EUR</div>
                  </div>
                </div>

                <div className="">
                <div className="font-semibold text-[#2b4146]"><span>&euro;</span>2,000,000.50</div>
                    <div className=" float-right ">Default</div>
                </div>

              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="bg-[#eef7f9] p-4 rounded-lg h-24">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <div>
                    <RoundedImage />
                  </div>

                  <div className="ml-2">
                    <div className="font-semibold">EUR Wallet</div>
                    <div>EUR</div>
                  </div>
                </div>

                <div className="">
                <div className="font-semibold text-[#2b4146]"><span>&euro;</span>2,000,000.50</div>
                    <div className=" float-right ">Default</div>
                </div>

              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default ActivityTabs;
