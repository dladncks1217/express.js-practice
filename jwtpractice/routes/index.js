const { Count } = require("../models");
const authJWT = require("./middlewares/authJWT");

const router = require("express").Router();

router.get("/getuser", authJWT, (req, res, next) => {
  console.log(req.nick);
  if (req.nick) {
    res.send({ nick: req.nick, role: req.role });
  }
});

router.get("/getcount", authJWT, async (req, res, next) => {
  if (req.id) {
    let count = await Count.findOne({ where: { userId: req.id } });
    return res.send(count);
  }
});

router.post("/addcount", authJWT, async (req, res, next) => {
  try {
    if (req.id) {
      let countGet = await Count.findOne({ where: { userId: req.id } });
      Count.update(
        { count: countGet.count + 1 },
        { where: { userId: req.id } }
      );
    }
  } catch (err) {
    console.error(err);
    return res.send("로그인이 필요합니다.");
  }
});

module.exports = router;
