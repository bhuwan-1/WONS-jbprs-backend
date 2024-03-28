const session = require("express-session");
require("dotenv").config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 3600000,
  },
});

const createSession = (req, user) => {
  req.session.user = { cid: user.cid };
};

const destroySession = (req, res, next) => {
  req.session.destroy();
};

module.exports = { sessionMiddleware, createSession, destroySession };
