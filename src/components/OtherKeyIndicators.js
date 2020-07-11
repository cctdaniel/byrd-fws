import { Box, Divider, Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Title from "./Title"

const OtherKeyIndicators = () => {
  return (
    <React.Fragment>
      <Title>Other Key Indicators</Title>
      <Divider />
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm>
            <Typography
              align="right"
              color="textSecondary"
              component="h2"
              variant="h2"
            >
              3%
            </Typography>
          </Grid>
          <Grid item xs={3} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Waste Percentage
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Decreased by <strong>1%</strong> from last week
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sm>
            <Typography
              align="right"
              color="textSecondary"
              component="h2"
              variant="h2"
            >
              $5,672
            </Typography>
          </Grid>
          <Grid item xs={3} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Cost of Wastage
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Decreased by <strong>$438</strong> from last week
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default OtherKeyIndicators
