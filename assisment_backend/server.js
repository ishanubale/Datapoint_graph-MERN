const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// import datapoint routes 
const dataPointRoute = require('./routes/graphRoute')

mongoose.connect('mongodb://localhost:27017/testdb' , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open',() => {
    console.log("DB connected")
})

const app = express()

// Enable CORS for all routes
app.use(cors());


// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Can include in env file
const PORT  = 3001

app.listen(PORT,()=>{
    console.log('Server is rinning on 3001')
})


app.use('/api/datapoint', dataPointRoute)