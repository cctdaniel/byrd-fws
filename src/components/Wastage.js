import { Box, CircularProgress, Divider } from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import Title from "./Title"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F51B00"]

const useStyles = makeStyles((theme) => ({
  buttonProgressWastage: {
    color: blue[500],
    position: "relative",
  },
  buttonProgressWastagePie: {
    color: blue[500],
    position: "relative",
    top: "30%",
    left: "50%",
    marginTop: -8,
    marginLeft: -12,
  },
}))

const Wastage = ({ data }) => {
  const classes = useStyles()

  const top_5_by_cost = () => {
    if (data) {
      let result = data.reduce((c, v) => {
        c[v.name] = (c[v.name] || 0) + parseFloat(v.cost)
        return c
      }, {})
      let top_5 = []
      for (var i in result) {
        if (result.hasOwnProperty(i)) {
          top_5.push({ name: i, cost: ~result[i] * -1 })
        }
      }
      top_5.sort(function (a, b) {
        return b.cost - a.cost
      })
      return top_5.slice(0, 5)
    }
  }
  const pie_data = top_5_by_cost()

  return (
    <React.Fragment>
      <Title>Total Wastage</Title>
      <Divider />
      <Box p={5}>
        <Typography
          component="h3"
          variant="h3"
          color="textSecondary"
          align="center"
        >
          {data ? (
            data
              .map((data) => parseFloat(data.weight))
              .reduce((acc, elem) => elem + acc)
              .toFixed(2) + "kg"
          ) : (
            <CircularProgress
              size={24}
              className={classes.buttonProgressWastage}
            />
          )}
        </Typography>
        {/* <Typography align="center">
          Highest wastage on <strong>Tuesday</strong>
        </Typography> */}
      </Box>
      <Divider />
      <Box mt={2}>
        <Title>Total Wastes Items (By Cost)</Title>
      </Box>
      {data ? (
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pie_data}
              innerRadius="25%"
              outerRadius="35%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="cost"
              label={(entry) => entry.name + " $" + entry.value}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <CircularProgress
          size={24}
          className={classes.buttonProgressWastagePie}
        />
      )}
    </React.Fragment>
  )
}

export default Wastage
