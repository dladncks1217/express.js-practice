const authJWT = require("./middlewares/authJWT");

const router = require("express").Router();

router.get("/userget", authJWT, (req, res, next) => {
  if (req.nick) {
    res.send(req.nick, req.role);
  }
});

module.exports = router;
