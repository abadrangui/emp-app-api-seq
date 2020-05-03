const express = require('express');

const Model = require('../models').department;
const Company = require('../models').company;

const Route = express.Router()

Route.get('/findall/:id', (req, res) => {
  Model.findAll({
    where: { companyId: req.params.id },
    include: [
      { model: Model, as: "head" }
    ]
  })
    .then(data => {
      res.json({ dep: data });
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
});

Route.post('/add', (req, res) => {
  const { name, desc, root, companyId } = req.body;

  Model.create({ name, desc, root, companyId })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.log(err);
      res.json({ er: err });
    })
})

Route.post('/edit', (req, res) => {
  const {id, name, desc, root, companyId } = req.body;

  Model.findOne({where: {id}})
  .then(( dep ) => {
    if(dep) {
      dep.update({
        name,
        desc,
        root,
        companyId
      })
      .then(() => {res.sendStatus(204)})
      .catch(err => {
        console.log(err);
        res.json({ er: err });
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.json({ er: err });
  })

  // Project.find({ where: { title: 'aProject' } })
  // .on('success', function (project) {
  //   // Check if record exists in db
  //   if (project) {
  //     project.update({
  //       title: 'a very different title now'
  //     })
  //     .success(function () {})
  //   }
  // })
})

module.exports = Route;