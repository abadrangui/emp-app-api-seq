const express = require('express');

const Model = require('../models').assignments;
const Department = require('../models').department;

const Route = express.Router();

Route.get('/findAll/:id', (req, res) => {
  Model.findAll({
    where: { companyId: req.params.id }
  })
    .then(data => {
      res.json({ plan: data });
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
})

Route.post('/create', (req, res) => {
  console.log(req.body);
})


module.exports = Route;