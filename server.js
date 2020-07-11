const express = require("express")
var cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const axios = require("axios")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "build")))

app.get("/data", async function (req, res) {
  //   const response = fetch(
  //     "https://25bm5b2ic1.execute-api.us-east-2.amazonaws.com/default/fetch_fws_data",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Api-Key": process.env.REACT_APP_DYNAMODB_API_KEY,
  //       },
  //     }
  //   )
  const response = await axios.get(
    "https://25bm5b2ic1.execute-api.us-east-2.amazonaws.com/default/fetch_fws_data",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_DYNAMODB_API_KEY,
      },
    }
  )
  res.json(response.data)
})

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(process.env.PORT || 8080)
