var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title: "映画GO"
  }
  res.render('index', data);
});

module.exports = router;
