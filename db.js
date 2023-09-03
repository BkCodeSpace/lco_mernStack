const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser : true,
  useUnifiedTopology:true,
  // useCreateIndex:true
}).then(()=>{
  console.log('DB CONNECTED..');
}).catch((err)=>console.log(console.log(err)))

