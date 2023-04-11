const jwt = require("jsonwebtoken");
const JWT_SECRET = "Himani";

const FetchUser = (req, res, next) => {
  //get the user from the JWT Token and Appent it to id

  const token = req.header("auth-token");
  try {
    if (!token) {
      return res
        .status(401)
        .send({ Error: "Please Authenticate With Valid JWT Token" });
    } else {
      const data = jwt.verify(token, JWT_SECRET);
      req.user = data.user;
    }

    next();
  } catch (error) {
    res.send({ Error: "Something Internal Error Occured ", error });
  }
};

module.exports = FetchUser;
