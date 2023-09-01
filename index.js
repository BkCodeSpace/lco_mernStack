const express = require("express")
const app = express()

//! Define the Port
const port = 7000

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

//! 1. Starting the server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})