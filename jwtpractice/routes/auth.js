const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("../utils/jwt-util");

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

router.post("/login", async (req, res) => {
  //... user 로그인 로직
  const { email, password } = req.body;
  const exUser = await User.findOne({ where: { email } });
  if (exUser) {
    const result = await bcrypt.compare(password, exUser.password);
    if (result) {
      // id, pw가 맞다면..
      // access token과 refresh token을 발급합니다.
      const accessToken = jwt.sign(exUser.id);
      const refreshToken = jwt.refresh();

      // 발급한 refresh token을 redis에 key를 user의 id로 하여 저장합니다.
      //   redisClient.set(user.id, refreshToken);

      res.status(200).send({
        // client에게 토큰 모두를 반환합니다.
        ok: true,
        data: {
          accessToken,
          refreshToken,
        },
      });
    }
  } else {
    res.status(401).send({
      ok: false,
      message: "없는 사용자입니다.",
    });
  }
});

module.exports = router;
