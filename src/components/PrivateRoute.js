import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useAppContext } from "../libs/contextLib"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppContext()

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute
