//Libraries
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

//Auth Keys
const { credentials } = require('../creds');
const { secret: APP_SECRET } = require('../auth');

const credentialValidator = (req, res, next) => {
  const { accessToken } = req.body || {};
  jwt.verify(accessToken, APP_SECRET, (error, result) => {
    if (error) {
      next(createError(403));
    }
    const { name, password } = result;
    credentials.some(cred => cred.name === name && cred.password === password);
    next();
  });
};

module.exports = credentialValidator;
