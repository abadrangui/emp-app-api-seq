const express = require('express');
const bodyParser = require('body-parser');

const companyRouter = require('./routes/companies');

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {console.log(`server started at ${PORT} port`)});


// fetching form data from the request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/companies', companyRouter);


app.get('/', (req, res) => {
    res.send("index");
})