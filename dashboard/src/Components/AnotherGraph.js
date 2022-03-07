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
    price: `${4}`,
    pv: 2400,
    amt: 1000000,
  },
  {
    name: "Feb",
    price: 3,
    pv: 1398,
    amt: 78000,
  },
  {
    name: "Mar",
    price: 3.5,
    pv: 9800,
    amt: 88600,
  },
  {
    name: "Apr",
    price: 3,
    pv: 3908,
    amt: 50000,
  },
  {
    name: "May",
    price: 2,
    pv: 4800,
    amt: 88600,
  },
  {
    name: "Jun",
    price: 3.5,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    price: 3,
    pv: 4300,
    amt: 120000,
  },
];

function AnotherGraph() {
  return (
    <div>
      <div className="row w-40">
        <div className="">
          <AreaChart
            width={800}
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
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}

export default AnotherGraph;
