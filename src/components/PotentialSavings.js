import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"
import GetAppIcon from "@material-ui/icons/GetApp"
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
import sampleReportPDF from "../assets/sample-report.pdf"
import Title from "./Title"

// const data = [
//   { name: "Current", value: 5762 },
//   { name: "Potential", value: 3779 },
// ]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonProgress: {
    color: blue[500],
    position: "relative",
    top: "1%",
    left: "50%",
    marginLeft: -12,
  },
}))

const COLORS = ["#FF8042", "#FFBB28"]

const PotentialSavings = ({ data }) => {
  const classes = useStyles()

  const current = () => {
    if (data) {
      return data
        .map((data) => parseFloat(data.cost))
        .reduce((acc, elem) => elem + acc)
        .toFixed(2)
    }
  }

  const potential = () => {
    if (data) {
      return 0.7 * current()
    }
  }

  const bar_data = [
    { name: "Current", value: current() },
    { name: "Potential", value: potential() },
  ]

  return (
    <React.Fragment>
      <Title>Potential Savings through Optimization</Title>
      <Divider />
      {data ? (
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            width={500}
            height={300}
            data={bar_data}
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
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeWidth={index === 2 ? 4 : 1}
                />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value) => `$${value.toLocaleString()}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <div style={{ padding: "10px 10px 10px 100px" }}>
              <Typography align="right" color="textPrimary" variant="body2">
                Cost savings possible through reduction in ingredients ordered
                and food portions.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div style={{ padding: "10px 0px" }}>
              <a href={sampleReportPDF} download="sample-report.pdf">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                >
                  View Report
                </Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default PotentialSavings
