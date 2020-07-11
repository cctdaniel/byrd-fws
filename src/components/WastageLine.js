import { Divider } from "@material-ui/core"
import React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Title from "./Title"

const data = [
  {
    name: "Mon",
    value: 2400,
  },
  {
    name: "Tue",
    value: 1398,
  },
  {
    name: "Wed",
    value: 9800,
  },
  {
    name: "Thu",
    value: 3908,
  },
  {
    name: "Fri",
    value: 4800,
  },
  {
    name: "Sat",
    value: 3800,
  },
  {
    name: "Sun",
    value: 4300,
  },
]

const WastageLine = () => {
  return (
    <React.Fragment>
      <Title>Total Wastage (By Cost)</Title>
      <Divider />
      <ResponsiveContainer width="100%" height={720}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default WastageLine
