import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AutorenewIcon from "@material-ui/icons/Autorenew"
import DataUsageIcon from "@material-ui/icons/DataUsage"
import SettingsIcon from "@material-ui/icons/Settings"
import { Auth } from "aws-amplify"
import React from "react"
import Footer from "../components/Footer"
import { useAppContext } from "../libs/contextLib"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
  },
}))

export const HomePage = () => {
  const classes = useStyles()
  const { isAuthenticated, userHasAuthenticated } = useAppContext()

  const handleLogout = async () => {
    await Auth.signOut()
    userHasAuthenticated(false)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="left" className={classes.title}>
              Home
            </Typography>
            {isAuthenticated ? (
              <>
                <Link color="inherit" href="/dashboard">
                  <Button color="inherit">Dashboard</Button>
                </Link>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link color="inherit" href="/sign-in">
                  <Button color="inherit">Sign In</Button>
                </Link>
                <Link color="inherit" href="/sign-up">
                  <Button color="inherit">Sign Up</Button>
                </Link>
              </>
            )}
            {/* <Link color="inherit" href="/sign-in">
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link color="inherit" href="/sign-up">
              <Button color="inherit">Sign Up</Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <strong>BYRD</strong>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              We understand how costly food waste is, for both your business and
              our environment. Say goodbye to food waste with BYRD.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Request a demo
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <strong>
                Effective waste management right at your fingertips
              </strong>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              From food waste to ingredients orders, manage all your kitchen
              operations effortlessly with BYRD. Welcome to the future.
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <div
                    style={{
                      margin: "auto",
                      paddingTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    <AutorenewIcon
                      color="primary"
                      style={{ fontSize: 80, textAlign: "center" }}
                    />
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      align="center"
                      variant="h5"
                      component="h2"
                    >
                      <strong>Complete Automation</strong>
                    </Typography>
                    <Typography align="center">
                      Everything is taken care of for you. Our system
                      automatically detects the type and amount of waste
                      produced. No additional effort needed from you or your
                      staff.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <div
                    style={{
                      margin: "auto",
                      paddingTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    <DataUsageIcon
                      color="primary"
                      style={{ fontSize: 80, textAlign: "center" }}
                    />
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      align="center"
                      variant="h5"
                      component="h2"
                    >
                      <strong>Valuable Insights</strong>
                    </Typography>
                    <Typography align="center">
                      BYRD provides you with detailed insights on waste
                      composition and patterns. Leverage it to save costs,
                      increase efficiency and save the environment all at one
                      go.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <div
                    style={{
                      margin: "auto",
                      paddingTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    <SettingsIcon
                      color="primary"
                      style={{ fontSize: 80, textAlign: "center" }}
                    />
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      align="center"
                      variant="h5"
                      component="h2"
                    >
                      <strong>Easy Customization</strong>
                    </Typography>
                    <Typography align="center">
                      BYRD offers the flexibility for businesses. Our platform
                      can be easily tailored to best suit your kitchen's needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

export default HomePage
