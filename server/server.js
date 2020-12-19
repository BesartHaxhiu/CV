const express = require('express');
const  path = require('path');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  mongoose = require('mongoose');
const  server = require('./DB');
const  contact = require ('./controller/contact');
const work = require('./controller/work');

mongoose.Promise = global.Promise;
mongoose.connect(server.DB);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/contact', contact);
app.use('/work', work);

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log('NodeJS Server Port: ', port);
  });