'use strict';
const data = require('./model/notes-schema');
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
  async save(value) {
    let record = new data(value);
    let saved = await record.save();
    let alldata = await data.find({});
  }
}
module.exports = Result;