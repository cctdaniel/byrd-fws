import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import CircularProgress from "@material-ui/core/CircularProgress"
import { green } from "@material-ui/core/colors"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { Auth } from "aws-amplify"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useAppContext } from "../libs/contextLib"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -8,
    marginLeft: -12,
  },
}))

const SignUp = () => {
  const history = useHistory()
  const { userHasAuthenticated } = useAppContext()
  const classes = useStyles()
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    return (
      state.email.length > 0 &&
      state.password.length > 0 &&
      state.password === state.confirmPassword
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      await Auth.signUp({
        username: state.email,
        password: state.password,
      })
      userHasAuthenticated(true)
      setIsLoading(false)
      history.push("/dashboard")
    } catch (e) {
      alert(e.message)
      setIsLoading(false)
    }
  }

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value,
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!validateForm() || isLoading}
              className={classes.submit}
            >
              Sign Up
            </Button>
            {isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  )
}

export default SignUp
