require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection

db.on('error',(err)=>{console.log(err)})
db.once('open',()=>{console.log("Connected to database")})

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)


app.listen(3000,()=>{console.log("server up on port 3000")})