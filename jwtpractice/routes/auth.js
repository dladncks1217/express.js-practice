const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

router.post("/join", async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.json("이미 가입된 이메일입니다.");
    }
    console.time("암호화 시간 확인용");
    const hash = await bcrypt.hash(password, 12);
    console.timeEnd("암호화 시간 확인용");
    const userData = await User.create({
      email,
      nick,
      password: hash,
    });

    return res.json(userData);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
