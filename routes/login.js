const express = require('express');

const employeeModel = require('../models').employee;

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { username, password } = req.body;

  employeeModel.findOne({ where: { username: username } })
    .then(data => {
      if(data.password === password){
        res.json({da: data});
      } else {
        res.sendStatus(401);
      }
    })
    .catch(err => {
      res.json({er: err});
    })
})






module.exports = loginRouter;