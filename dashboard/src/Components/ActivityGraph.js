import React from "react";
import { FiActivity, FiArrowDownLeft, FiArrowUpLeft } from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: `${4}`,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 3.5,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 3,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 2,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 3.5,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3,
    pv: 4300,
    amt: 2100,
  },
];

function ActivityGraph() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="md:basis-1/2 "></div>
        <div className="md:basis-1/2 ">
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
      </div>
      <div className="row">
      <div className="grid grid-cols-12">
        <AreaChart
           width={window.screen.width >= 1920 ? 1050 : 870 }
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
      </div>
  
      
    </div>
  );
}

export default ActivityGraph;
