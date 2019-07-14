//Library
const express = require('express');
const router = express.Router();

//Builders
const RequestBuilder = require('../builders/RequestBuilder');

//Routes
router.use('/login', require('./login'));
router.use('/articles', require('./articles'));
router.use('/accounts', require('./accounts'));
// router.use('/dockets', require('./dockets'));

router.get('/', function (req, res, next) {
  const request = new RequestBuilder({ baseUrl: 'https://google.com' })
    .baseSuffix(['apple/done', 'banana'])
    .additionalParams({
      color: 'purple',
    })
    .build();

  console.log(request);
  res.send('index');
});

module.exports = router;
