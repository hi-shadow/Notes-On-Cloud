const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
const FetchUser = require("../middleware/FetchUser");
const { body, validationResult } = require("express-validator");
const JWT_SECRET = "Himani";

router.post(
  "/registration",
  [
    body("email", "Enter a Valid Email Address").isEmail(),
    body("name", "Name Shoud Be Atleast 3 Charactors").isLength({ min: 3 }),
    body("password", "Password Is Must be an 8 Charactors").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      const { name, email, password } = req.body;
      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(400).send("Email Already Exists");
      } else {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        const result = await User.create({
          name,
          email,
          password: secPass,
        });

        const data = {
          user: {
            id: result.id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.status(200).json(authtoken);
      }
    } catch (error) {
      res.status(500).send("Internal Error Occured : ", error);
    }
  }
);

// Login EndPoint

router.post(
  "/signin",
  [
    body("email", "Enter a Valid Email Address").isEmail(),
    body("password", "Password Cant Be Blank").exists(),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      const exists = await User.findOne({ email });
      if (!exists) {
        return res.status(404).json("Use Correct Credentials Email");
      } else {
        const passwordCompare = await bcrypt.compare(password, exists.password);
        if (!passwordCompare) {
          return res.status(404).json("Use Correct Credentials Password");
        } else {
          const data = {
            user: {
              id: exists.id,
            },
          };
          const authtoken = jwt.sign(data, JWT_SECRET);
          res.status(200).json({ authtoken });
        }
      }
    } catch (err) {
      res.status(500).json("Internal Server Error : ", err);
    }
  }
);

// Get UserData
router.post("/getuser", FetchUser, async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findOne({ _id: userID }).select("-password");
    res.send(user);
  } catch (err) {
    res.status(500).json("Internal Server Error : " + err);
  }
});

module.exports = router;
