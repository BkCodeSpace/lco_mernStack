require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const app = express()
const db = require('./db')
//! Define the Port
const port = process.env.PORT || 7000;

//!Mongoose Connection
// mongoose.connect('mongodb://localhost:27017/lco_Mern',{
//   useNewUrlParser : true
// })


//- JSFunctionChaining =>   myfunct.run().then(ifSuccess).catch(error)

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

//! 1. Starting the server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})