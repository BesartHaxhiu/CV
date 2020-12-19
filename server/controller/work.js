var Work = require('../models/Work');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../static/images')
  },
  filename: (req, file, cb) => {
    let ext = file.originalname.substring(file.originalname.indexOf(".") + 1);
    cb(null, file.fieldname + '-' + Date.now() + "." + ext)
  }
});
var upload = multer({
  storage: storage
});

/* GET ALL Work */
router.get('/', function(req, res, next) {
  Work.find(function (err, work) {
      if (err) return next(err);
      res.json(work);
    });
  });
  
/* GET SINGLE Work BY ID */
router.get('/:id', function(req, res, next) {
    Work.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  router.post('/', upload.single('image'),
    function (req, res) {
      let work = req.body;
      work.title = req.body.title
      work.image = req.body.image != 'undefined' ? req.file.filename : null
      Work.create(work, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    
  });

  /* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Work.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Wrok.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
