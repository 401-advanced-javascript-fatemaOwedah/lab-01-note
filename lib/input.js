'use strict';
const minimist = require('minimist');
function Input() {
  let args = process.argv.slice(2);
  let formatted = minimist(args);
  let formattedKey = Object.keys(formatted);
  let key = formattedKey[1];
  let val = formatted[key];
  this.action = this.action(key);
  if (key === 'a' || key === 'add') {
    this.note = this.valid(val);
  }
}
Input.prototype.action = function (key) {
  if (key === 'a' || key === 'add') {
    return { action: 'add', playload: this.val };
  } else {
    console.log('you must use --add or -a to add a note');
  }
};
Input.prototype.valid = function (val) {
  if (val !== true) {
    return val;
  } else {
    console.log('please Enter a note');
  }
};
module.exports = Input;