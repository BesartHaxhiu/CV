var Contact = require('../models/Contact');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



router.get('/', function(req, res, next) {
    Contact.find(function (err, contact) {
      if (err) return next(err);
      res.json(contact);
    });
  });
  

router.get('/:id', function(req, res, next) {
    Contact.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


router.post('/', function(req, res, next) {
    Contact.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  

router.delete('/:id', function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;