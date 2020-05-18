#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let parsedInput = new Input();
new Notes(parsedInput.note);