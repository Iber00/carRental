const express = require ('express');
const bodyParser = require ('body-parser');
const carsControllers = require('./controllers/cars-controllers');
const userControllers = require('./controllers/users-controllers');
const checkAuth = require('./middleware/check-auth');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.post('/car', carsControllers.createCar); 
app.get('/rental-cars',carsControllers.getCars);
app.post('/register',userControllers.createUser);
app.post('/login',userControllers.login);


app.use(checkAuth);

app.get('/my-profile/:uid',userControllers.getUserById);

//import * as dotenv from 'dotenv';
//dotenv.config();


  mongoose
  .connect('mongodb://127.0.0.1:27017/carRent', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB locally!");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => {
    console.error("Error, cannot connect to database", err);
  });