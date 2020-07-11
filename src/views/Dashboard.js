import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import { Auth } from "aws-amplify"
import clsx from "clsx"
import React from "react"
import Footer from "../components/Footer"
import { mainListItems } from "../components/listItems"
import PotentialSavings from "../components/PotentialSavings"
import Wastage from "../components/Wastage"
import { useAppContext } from "../libs/contextLib"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 900,
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [data, setData] = React.useState()
  const getData = () => {
    return fetch("/data").then((response) => response.json())
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const { userHasAuthenticated } = useAppContext()

  const handleLogout = async () => {
    await Auth.signOut()
    userHasAuthenticated(false)
  }

  React.useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            align="left"
          >
            Dashboard
          </Typography>
          <Link color="inherit" href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Wastage */}
            <Grid item xs={12} md={5} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Wastage data={data} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={7} lg={6}>
              <Paper className={fixedHeightPaper}>
                <PotentialSavings data={data} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default Dashboard
