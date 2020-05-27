'use strict';
const minimist = require('minimist');
class Input {
  constructor() {
    let args = process.argv.slice(2);
    let formatted = minimist(args);
    let formattedKey = Object.keys(formatted);
    let key = formattedKey[1];
    let val = formatted[key];
    let key1 = formattedKey[2];
    let val1 = formatted[key1];
    this.action = this.actions(key,val,key1,val1);
  }
  actions(key,val,key1,val1) {
    if ((key === 'a'  || key === 'add') || key1 === 'category') {
      this.note = this.valid(val);
      return { action: 'add', playload: val, category:val1 || 'default'};
    }else if(key==='list'){
      return { action: 'list', category:val };
    }else if(key==='delete'){
      return { action: 'delete', id: val };
    }else {
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
