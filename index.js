#!/usr/bin/env node
'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let parsedInput = new Input();
new Notes(parsedInput.note);




const mongoose = require('mongoose');
const NoteSchema = require('./lib/model/notes-schema');
const MONGO_DB = process.env.MONGOOSE_URI;

mongoose.connect(MONGO_DB, {userNewUrlParse: true, useUnifiedTopology: true} );

const doDataStuff = async()=> {

  let nootte = {
    payload: 'Apple',
    category: 'dvdvdv',
  };
  let notenew = new NoteSchema(nootte); 

  await notenew.save();

  let uniqueNote = await NoteSchema.findById(notenew.id);
  let notesColl = await NoteSchema.find({category: 'Apple'});
  
    
  let allNotes = await NoteSchema.find({});
};

doDataStuff();