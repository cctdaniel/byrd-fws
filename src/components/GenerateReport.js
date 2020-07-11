import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GetAppIcon from "@material-ui/icons/GetApp"
import React from "react"
import ItemReportTemplate from "../assets/item-report-template.png"
import sampleReportPDF from "../assets/sample-report.pdf"
import WasteCompositionTemplate from "../assets/waste-composition-template.png"
import Title from "./Title"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const GenerateReport = () => {
  const classes = useStyles()
  const [reportType, setReportType] = React.useState("")
  const [month, setMonth] = React.useState("")

  return (
    <React.Fragment>
      <Title>Generate from teplate</Title>
      <Divider />
      <Box p={5}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography component="h6" variant="h6" color="textPrimary">
              Item Report (Weekly)
            </Typography>
            <Box mt={2}>
              <Card className={classes.root}>
                <img
                  className={classes.media}
                  src={ItemReportTemplate}
                  alt="Item Report Template"
                />
              </Card>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography component="h6" variant="h6" color="textPrimary">
              Waste Composition (Month on Month)
            </Typography>
            <Box mt={2}>
              <Card className={classes.root}>
                <img
                  className={classes.media}
                  src={WasteCompositionTemplate}
                  alt="Waste Composition Report Template"
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Title>New report format</Title>
      <Divider />
      <Box p={5}>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="report-type-label">Report Type</InputLabel>
            <Select
              labelId="report-type-label"
              id="report-type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value={"Item Report"}>Item Report</MenuItem>
              <MenuItem value={"Recommendation Report"}>
                Recommendation Report
              </MenuItem>
              <MenuItem value={"Waste Composition Report"}>
                Waste Composition Report
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="month-label">Month</InputLabel>
            <Select
              labelId="month-label"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((month) => (
                <MenuItem value={month}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div style={{ padding: "10px 100px", display: "inline-block" }}>
            <a href={sampleReportPDF} download="sample-report.pdf">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<GetAppIcon />}
              >
                Generate Report
              </Button>
            </a>
          </div>
        </div>
      </Box>
    </React.Fragment>
  )
}

export default GenerateReport
