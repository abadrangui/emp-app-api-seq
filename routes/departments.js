const express = require('express');

const Model = require('../models').department;
const Company = require('../models').company;

const Route = express.Router()

Route.get('/findall', (req, res) => {
    Model.findAll({include: [
        {model: Company, as: "company"}
    ]})
        .then(data => {
            res.json({ dep: data });
        })
        .catch(err => {
            console.log(err);
            res.json({ er: err });
        })
});

Route.post('/add', (req, res) => {
    const { name, desc, root } = req.body;

    Model.create({ name, desc, root })
        .then(() => {
            res.sendStatus(204);
        })
        .catch(err => {
            console.log(err);
            res.json({ er: err });
        })
})

module.exports = Route;