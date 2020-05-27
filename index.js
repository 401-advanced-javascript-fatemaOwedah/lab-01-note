#!/usr/bin/env node
'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let parsedInput = new Input();
let notes = new Notes(parsedInput);





const mongoose = require('mongoose');
require('./lib/model/notes-schema');
const MONGO_DB = process.env.MONGOOSE_URI;

mongoose.connect(MONGO_DB, {userNewUrlParse: true, useUnifiedTopology: true, useCreateIndex: true} );


notes.save(parsedInput.action)
  .then(()=>notes.list(parsedInput.action))
  .then(()=>notes.delete(parsedInput.action))
  .then(()=>notes.update(parsedInput.action))
  .then(mongoose.disconnect);
  

