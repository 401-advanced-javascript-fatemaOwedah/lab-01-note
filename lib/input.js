'use strict';
const minimist = require('minimist');
class Input {
  constructor() {
    let args = process.argv.slice(2);
    let formatted = minimist(args);
    let formattedKey = Object.keys(formatted);
    let key = formattedKey[1];
    let val = formatted[key];
    this.action = this.actions(key,val);
  }
  actions(key,val) {
    if (key === 'a' || key === 'add') {
      this.note = this.valid(val);
      return 'add';
    } else {
      console.log('you must use --add or -a to add a note');
    }
  }
  valid(val) {
    if (val !== true) {
      return val;
    } else {
      console.log('please Enter a note');
    }
  }
}
module.exports = Input;
