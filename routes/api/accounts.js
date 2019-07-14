//Library
const router = require('express').Router();

/* GET  articles by filters*/
router.get('/', function (req, res, next) {
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
