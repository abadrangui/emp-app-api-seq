const express = require('express');

const Model = require('../models').employee;
const Department = require('../models').department;

const Route = express.Router();

Route.get('/findall/:id', (req, res) => {
  Model.findAll({
    where: { companyId: req.params.id },
    include: [
      { model: Department, as: "department" }
    ]
  })
    .then(data => {
      res.json({ emp: data });
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
});

Route.post('/add', (req, res) => {
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