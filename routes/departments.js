const express = require('express');

const Model = require('../models').department;

const Route = express.Router()

Route.get('/findall', (req, res) => {
    Model.findAll()
    .then( data => {
        console.log("DATA_", data);
        res.json({dep: data});
    })
    .catch( err => {
        console.log(err);
        res.json({er: err});
    })
});

module.exports = Route;