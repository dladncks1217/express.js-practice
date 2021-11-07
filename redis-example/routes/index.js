const express = require("express");
const { User } = require("../models");
const router = express.Router();

require("dotenv").config();

router.post("/join", async (req, res, next) => {
  const { email, name, age } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });

    if (exUser) {
      return res.status(403).json("이미 가입된 이메일입니다.");
    } else {
      const newUser = await User.create({
        email,
        name,
        age,
      });
      return res.status(200).json(newUser);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
