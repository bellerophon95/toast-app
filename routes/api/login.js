//Library
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//Authentication
const { secret: APP_SECRET } = require('../../auth');
const { credentials } = require('../../creds'); //Todo :- Do credential validation in a separate database for users

//Constants
const { outletType } = require('../constants/routeConstants');

const STATUS_CODE = {
  INCOMPLETE_PARAMS: 1,
  INVALID_CREDS: 2,
  VALID_CREDS: 3,
};

/* POST login*/
router.post('/', function (req, res, next) {
  const {
    body,
  } = req;

  const { name, password } = body || {};
  if (!name || !password) {
    res.json({
      status: {
        isValid: false,
        failureCode: STATUS_CODE.INCOMPLETE_PARAMS,
        description: 'Incomplete Params.'
      }
    });
  }
  const accessToken = jwt.sign({
    name,
    password,
  }, APP_SECRET);

  res.json({ accessToken });
});

//Post invalidate token Todo: Create a separate database to store invalidated tokens into a blacklist into a database, write middleware to authenticate tokens not on the blacklist.


module.exports = router;
