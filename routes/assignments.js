const express = require('express');

const Model = require('../models').assignment;
const Employee = require('../models').employee;

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


Route.post('/1/create', (req, res) => {
  console.log(req.body);
  // Model.create(req.body)
  // .then(() => {
  //   res.sendStatus(204)
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.json({ er: err });
  // })
})


Route.get('/findbyCreater/:id', (req, res) => {
  Model.findAll({
    where: { createrId: req.params.id },
    include: [
      { model: Employee, as: 'employee' },
    ],
    raw: true
  })
    .then(data => {
      console.log("(((((((", data)
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
})

module.exports = Route;