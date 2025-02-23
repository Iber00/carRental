const User = require('../models/user.js');

const createUser = async (req, res, next) => {
    const createdUser = new User({
      full_name: req.body.full_name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password

    });
    const result = await createdUser.save();
  
    res.json(result);
  };


  const login = async (req, res, next) => {
    const { username, password } = req.body;
  
    let existingUser;
  
    try {
      existingUser = await User.findOne({ username: username })
    } catch (err) {
      const error = new HttpError(
        'Logging in failed',
        500
      );
      return next(error);
    }
  
    if (!existingUser || existingUser.password !== password) {
      res.json({message: 'Invalide credentials'});
    }
  
    res.json({message: 'Logged in!'});
  };


  const getUsers = async (req , res , next) => {
    const user = await User.find().sort({ }).exec();
    res.json(user);
};


const getUserById = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
     user = await User.findById(userId).select('full_name username email')
  } catch (err) {
    res.json(err);
    return next(error);
  }

  if (!user) {
    res.json("The user does not exist");
    return next(error);
  }

  res.json({ full_name:user.full_name,username:user.username, email: user.email });
};

  exports.createUser = createUser;
  exports.login = login;
  exports.getUserById = getUserById;