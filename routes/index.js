var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', upload.single('file_upload'), function(req, res, next) {
  res.json({ size: req.file.size + " bytes"});
  // res.render('index');
});

module.exports = router;
