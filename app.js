const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');

const companyRouter = require('./routes/companies');
const employeeRouter = require('./routes/employees');
const loginRouter = require('./routes/login');
const departmentRouter = require('./routes/departments');
const planRouter = require('./routes/plans');
const uploadRouter = require('./routes/upload');
const assignmentRouter = require('./routes/assignments');

const app = express();

const PORT = process.env.PORT || 3001;


db.sequelize.sync().then(function () {
  app.listen(
    PORT,
    () => {
      console.log(`server started at ${PORT} port`)
    }
  );
})


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// fetching form data from the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/companies', companyRouter);
app.use('/employees', employeeRouter);
app.use('/login', loginRouter);
app.use('/departments', departmentRouter);
app.use('/plans', planRouter);
app.use('/upload', uploadRouter);
app.use('/asign', assignmentRouter);


app.get('/', (req, res) => {
  res.send("index");
})

