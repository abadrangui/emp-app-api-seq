const express = require('express');

const Model = require('../models').assignment;
const Department = require('../models').department;

const Route = express.Router();

Route.get('/findAll/:id', (req, res) => {
  Model.findAll({
    where: { companyId: req.params.id },
    raw: true
  })
    .then(data => {
      res.json({ plan: data });
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
})

Route.post('/0/create', (req, res) => {
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