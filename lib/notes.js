'use strict';
class Result{
  constructor(value){
    this.execute(value);
    this.add(value);
  }
  execute (value) {
    if (value) {
      console.log('Note Saved', value);
    }
  }
  add (value) {
    if (value) {
      console.log({ txtMsg: value, id: Math.floor(Math.random() * 1000) });
    }
  }
}
module.exports = Result;