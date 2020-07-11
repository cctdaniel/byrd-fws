import { Divider } from "@material-ui/core"
import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Title from "./Title"

const data = [
  {
    day: "Mon",
    served: 1000,
    raw: 9000,
  },
  {
    day: "Tue",
    served: 2000,
    raw: 8000,
  },
  {
    day: "Wed",
    served: 5000,
    raw: 5000,
  },
  {
    day: "Thu",
    served: 4000,
    raw: 6000,
  },
  {
    day: "Fri",
    served: 6000,
    raw: 4000,
  },
  {
    day: "Sat",
    served: 5000,
    raw: 5000,
  },
  {
    day: "Sun",
    served: 8000,
    raw: 2000,
  },
]

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal / 100).toFixed(fixed)}%`
}

const WastageStackedBar = () => {
  return (
    <React.Fragment>
      <Title>Waste Composition (By Cost)</Title>
      <Divider />
      <ResponsiveContainer width="100%" height={720}>
        <BarChart
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
          <YAxis tickFormatter={toPercent} />
          <Tooltip />
          <Legend />
          <Bar dataKey="raw" stackId="a" fill="#FFBB28" />
          <Bar dataKey="served" stackId="a" fill="#8B0000" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default WastageStackedBar
