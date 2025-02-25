PROJECT NAME :  carRental
DESCRIPTION:  This project is a mini-program that can be used from rent-a car bussineses, in this program we can store all the cars we have in stock, cars are shown sorted from lowest to highest price per day, sorted by color,year, steering type and number of seats. In the next lines you can find how this program work and you can see steps how to test it.
-----------------------------------------------------------------------------------------------------------------------
// npm run start -> To start the project , 
Then open mongoDB compass with link mongodb://localhost:27017,
After these steps, open postman App to test the API's below.

// - API of this program are tested in Postman app.
Below they API's are sorted from first to last based on exam requirments.

1).Register API  
// app.post('/register',userControllers.createUser);

 
The Register API can be tested by sending POST request http://localhost:3000/register
By populating full_name, email,username,password
Here is an example of a JSON request to register users:
{
    "full_name":"Iber Gocaj",
    "email":"ibergocajj@gmail.com",
    "username":"Iber",
    "password":"12345678"
}
Here is an example how a user is saved in database table called "User":
 

2). Adding Car API
// app.post('/car', carsControllers.createCar);

 

The createCar API can be tested by sending POST request http://localhost:3000/createCar
By populating name,price_per_day,year,color,steering_type,number_of_seats.
Here is an example of a JSON request to add a car:
{
    "name":"Opel Astra",
    "price_per_day":43,
    "year":2011,
    "color":"Orange",
    "steering_type":"manual",
    "number_of_seats":5
}
Here is an example how a new car is saved in database table called "Car":
 
3).Login API
// app.post('/login',userControllers.login);
 

The Login API can be tested by sending POST request http://localhost:3000/login
By populating username,password
Here is an example of a JSON request to login users:
{
    "username":"Iber",
    "password":"12345678"
}
4).Rental-cars API 
//app.get('/rental-cars',carsControllers.getCars);

 
The rental-cars API can be tested by sending GET request http://localhost:3000/rental-cars
And we get the list of cars from lowest price to the highest 
Also we can sort cars from lowest price to the highest based on color ,year,steering_type,number_of_Seats for example
4.1).Based on color:
We sent the Get request, specified color in url:  http://localhost:3000/rental-cars?color=Blue
And the result will show Blue cars sorted from lowest price to the highest per day:
 

4.2)Based on year:
We sent the Get request, specified year in url: http://localhost:3000/rental-cars?year=2021
And the result will show Cars sorted by year 2021, lowest price to the highest per day:
 
4.3).Based on number_of_seats:
We sent the Get request, specified number_of_seats in url http://localhost:3000/rental-cars?number_of_seats=4
And the result will show Cars sorted by number_of_seats=4, from lowest price to the highest per day:
 

4.4).Based on steering_type:
We sent the GET request, specified on steering_type=automatic http://localhost:3000/rental-cars?steering_type=automatic
And the result will show Cars sorted from automatic steering type and from lowest to highest price_per_day:
 

5). My-profile API 
//app.get('/my-profile/:uid',userControllers.getUserById);
This API will sent GET request and as response we will get full_name,username and email of the user based on user Id as the project requst this API will hit only by authenicate token of that user
Steps to hit the API
1).Send the login API of the user and as the response we will get the token of user:
 
2).Copy the token and go to Authorization and paste the token
 
3).Then hit the profile API  http://localhost:3000/my-profile/67bcdccaf813817971c7db6c
 
And we will GET the full_name ,username,email of that user.
If we try to hit the API without the token we will not get the response like in the example below.


IN THE ZIP FOLDER I WILL ADD THE WORD FILE WHERE ARE SHOWN DESCRIPTION WITH PICS












