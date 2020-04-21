const express = require('express');

const companyModel = require('../models').company;

const companyRouter = express.Router();

companyRouter.get('/find/:id', (req, res) => {
    companyModel.findOne({where: {id:req.params.id}})
    .then(data => {
        res.json({company: data});
    })
    .catch(err => {
        console.log(err);
        res.json({er: err});
    })
})

companyRouter.get('/', (req, res)=>{
    companyModel.findAll()
    .then(data => {
        res.json({da:data});
    })
    .catch(err => {
        res.json({er:err});
    })
})

companyRouter.post('/add', (req, res) => {
    companyModel.create(req.body)
    .then( data => {
        res.json({da:data});
    })
    .catch(err => { 
         res.json({er:error})
    })
})

companyRouter.post('/delete/:id', (req, res) => {
    companyModel.destroy({where:{id:req.params.id}})
    .then( data => {
        res.json({da:data});
    })
    .catch( err => {
        res.json({er:error});
    })
})

module.exports = companyRouter;