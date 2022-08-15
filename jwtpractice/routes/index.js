const authJWT = require("./middlewares/authJWT");

const router = require("express").Router();

router.get("/getuser", authJWT, (req, res, next) => {
  console.log(req.nick);
  if (req.nick) {
    res.send({ nick: req.nick, role: req.role });
  }
});

module.exports = router;
