// const express = require('express')
// const breads = express.Router()
const breads = require('express').Router()
const Bread = require('../models/breads')
// INDEX
breads.get('/', (req, res) => {
    res.send(Bread)
})
module.exports = breads

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})