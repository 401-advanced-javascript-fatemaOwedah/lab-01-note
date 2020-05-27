'use strict';

const mongoose = require('mongoose');

const notess = mongoose.Schema({
  playload:{type:'string',required:true},
  category:{type:String,required:true,uppercase:true},
});

module.exports = mongoose.model('notes',notess);