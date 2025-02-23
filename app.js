const express = require ('express');
const bodyParser = require ('body-parser');
const carsControllers = require('./controllers/cars-controllers');
const userControllers = require('./controllers/users-controllers');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.post('/car', carsControllers.createCar);
app.get('/rental-cars',carsControllers.getCars);
app.post('/register',userControllers.createUser);
app.post('/login',userControllers.login);
app.get('/my-profile/:uid',userControllers.getUserById);


mongoose
.connect('mongodb+srv://iber:12341234@cluster0.qu9d1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log("Error ,can not connect to data base");
  });