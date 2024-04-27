const jwt = require('jsonwebtoken');
const parseBearerToken = require('parse-bearer-token');

const secret = process.env.SESSION_SECRET;

const getTokenSecret = () => secret;

const tokenFromRequest = req => parseBearerToken(req);

const createToken = async user => {
  const { cid } = user;
  return jwt.sign(
    {
      cid
    },
    secret,
    {
      expiresIn: '24h',
    },
  );
};

const parseToken = token => jwt.verify(token, secret);

module.exports = {
  createToken,
  tokenFromRequest,
  parseToken,
  getTokenSecret
}