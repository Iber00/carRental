const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    if (!token) {
      console.log("error");
    }
    const decodedToken = jwt.verify(token, 'behamics123');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    
    console.log(err);
  }
};