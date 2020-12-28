// modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

// variables
const dbLink = process.env.DBLINK
const port = process.env.DBPORT
const userRoute = require('./src/routes/userRoute')

// database connection
mongoose.connect(dbLink, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    app.listen(port, () => {
        console.info(`DATABASE CONNECTED ON PORT ${port}`)
    })
}, (error) => {
    console.log(dbLink, port)
})

// middlewares
app.use(express.json())
app.use(express.static('build'))

app.get('/', (request, response) => {
    response.status(200).sendFile(path.join(__dirname, 'build', 'index.html'))
})

// routes
app.use(userRoute)
