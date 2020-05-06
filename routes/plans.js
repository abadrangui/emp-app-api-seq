const express = require('express');

const Model = require('../models').plan;
const Department = require('../models').department;

const Route = express.Router();

Route.post('/add', (req, res) => {
    console.log(req.body);
    Model.create(req.body)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
})

module.exports = Route;