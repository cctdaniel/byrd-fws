import { Divider } from "@material-ui/core"
import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Title from "./Title"

const data = [
  { name: "Raw", value: 0.05 },
  { name: "Pre-prep", value: 0.35 },
  { name: "Served", value: 0.6 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const WasteCompositionWeight = () => {
  return (
    <React.Fragment>
      <Title>Waste Composition (By Weight)</Title>
      <Divider />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          layout="vertical"
          barCategoryGap={3}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                strokeWidth={index === 2 ? 4 : 1}
              />
            ))}
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default WasteCompositionWeight
