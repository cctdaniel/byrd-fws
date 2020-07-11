import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Dashboard from "./views/Dashboard"
import HomePage from "./views/HomePage"
import Reports from "./views/Reports"
import Weekly from "./views/Weekly"
import MenuBoard from "./views/MenuBoard"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />(
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/weekly" component={Weekly} />
      <PrivateRoute exact path="/reports" component={Reports} />
      <PrivateRoute exact path="/menu-board" component={MenuBoard} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
  )
}

export default Routes
