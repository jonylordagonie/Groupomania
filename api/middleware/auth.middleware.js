require("dotenv").config();

const jwt = require("jsonwebtoken");
const tokenkey = process.env.TOKEN;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.userId;
    const role = decodedToken.role;
    if (role === 'admin') {
      next();
    } else {
      if (req.body.userId && req.body.userId !== userId) {
        throw "User Id not valid ! ";
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(401).json({ error: new Error("unauthorized request ") });
  }
};