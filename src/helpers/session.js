const session = require("express-session");
require("dotenv").config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 3600000,
  },
});

const createSession = (req,res, user) => {
  console.log(user);
  req.session.user = { cid: user.cid };
  res.cookie("session:", req.session.id, { httpOnly: true, secure: true });
};

const destroySession = (req, res, next) => {
  req.session.destroy();
};

module.exports = { sessionMiddleware, createSession, destroySession };
