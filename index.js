// modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

// variables
const dbLink = process.env.DBLINK
const port = process.env.DBPORT
// const routes =

// middlewares
app.use(express.json())
app.use(express.static('build'))

app.get('/', (request, response) => {
    response.status(200).sendFile(path.join(__dirname, 'build', 'index.html'))
})

// routes
