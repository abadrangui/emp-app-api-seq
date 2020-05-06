const express = require('express');

const Model = require('../models').plan;
const Department = require('../models').department;

const Route = express.Router();

Route.post('/addPlan', (req, res) => {
    console.log(req.body);
    file = req.body.file[0];

    file.mv(`${__dirname}/public/uploads/`, err => {
        console.log(err)
    })
    // Model.create(req.body)
    // .then(() => {
    //   res.sendStatus(204)
    // })
    // .catch(err => {
    //   console.log(err);
    //   res.json({ er: err });
    // })
})

module.exports = Route;