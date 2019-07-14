//Library
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//Constants
const { outletType } = require('../constants/routeConstants');

const validatorFn = (req, res, next) => {
  const token = jwt.sign({ apple: 'apple' }, 'secret');
  jwt.verify(token, 'secret', (error, response) => {
    if (error) {
      console.log('Error');
      // res.setHeaderValue(403);
    }
    console.log(response);
  });
  next();
};
//
// router.post('/', (req, res, next) => {
//   console.log(req.headers, req.body);
//   return res.json({response: 'Sent!'});
// });

/* GET  articles by filters*/
router.get('/', validatorFn, function (req, res, next) {
  const {
    query: {
      startIndex,
      endIndex,
      articleType,
    },
  } = req;
  return res.json({ done: 'done' })
});

module.exports = router;
