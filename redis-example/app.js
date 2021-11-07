const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
// express-session 사용하기때문에 express-session보다 아래에 있어야 함.
const passport = require("passport");
const redis = require("redis");

require("dotenv").config();

const indexRouter = require("./routes/index");
const { sequelize } = require("./models");
const passportConfig = require("./passport");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  logErrors: true,
});

const app = express();
sequelize.sync();
passportConfig(passport);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    // store: new RedisStore({ client }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 번 포트에서 서버 대기중`);
});
