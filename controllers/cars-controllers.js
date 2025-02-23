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

/*const getCars = async (req , res , next) => {
    const cars = await Car.find().sort({ price_per_day: -1 }).exec();
    res.json(cars);
};*/

const getCars = async (req, res, next) => {
    const { color, year, steering_type, number_of_seats } = req.query;
  
    try {
      let query = {};
  
      if (color) query.color = color;
      if (year) query.year = Number(year); 
      if (steering_type) query.steering_type = steering_type;
      if (number_of_seats) query.number_of_seats = Number(number_of_seats); 
  
      const cars = await Car.find(query).sort({ price_per_day: 1 }).exec();
  
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: "This car is missing", error });
    }
  };
  












 exports.getCars = getCars;
 exports.createCar = createCar;