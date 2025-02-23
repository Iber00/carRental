const Car = require('../models/cars.js');

const createCar = async (req, res, next) => {
    const createdCar = new Car({
      name: req.body.name,
      price_per_day: req.body.price_per_day,
      year: req.body.year,
      color: req.body.color,
      steering_type: req.body.steering_type,
      number_of_seats: req.body.number_of_seats

    });
    const result = await createdCar.save();
  
    res.json(result);
  };

const getCars = async (req , res , next) => {
    const cars = await Car.find().sort({ price_per_day: -1 }).exec();
    res.json(cars);
};

 exports.getCars = getCars;
 exports.createCar = createCar;