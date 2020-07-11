import { Auth } from "aws-amplify"
import React, { useEffect, useState } from "react"
import "./App.css"
import { AppContext } from "./libs/contextLib"
import Routes from "./Routes"

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== "No current user" && e.message !== "Failed to fetch") {
        alert(e)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <AppContext.Provider
          value={{ isAuthenticated, userHasAuthenticated }}
        >
          <Routes />
        </AppContext.Provider>
      </div>
    )
  )
}

export default App
