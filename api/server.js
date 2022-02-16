const express = require("express")

const server = express()

const carsRouter = require('./cars/cars-router')



// DO YOUR MAGIC
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is UP'})
})

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} did not connect to ${req.baseUrl}`})
})



module.exports = server
