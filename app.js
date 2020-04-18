const express = require('express');
const bodyParser = require('body-parser');

const companyModel = require('./models').company;

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {console.log(`server started at ${PORT} port`)});


// fetching form data from the request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("indes");
})

app.get('/companies', (req, res)=>{
    companyModel.findAll()
    .then(data => {
        res.json({da:data});
    })
    .catch(err => {
        res.json({er:error});
    })
})

app.post('/addcompany', (req, res) => {
    companyModel.create(req.body)
    .then( data => {
        res.json({da:data});
    })
    .catch(err => { 
         res.json({er:error})
    })
})

app.post('/deletecompany/:id', (req, res) => {
    companyModel.destroy({where:{id:req.params.id}})
    .then( data => {
        res.json({da:data});
    })
    .catch( err => {
        res.json({er:error});
    })
})