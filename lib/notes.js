'use strict';
const data = require('./model/notes-schema');
class Result{
  constructor(value){
    this.add(value);
  }

  add (value) {
    if (value.action.action === 'add') {
      console.log('Note Saved',value.note);
    }
  }
  async list(value){
    console.log(value);
    if(value.action === 'list'){
      let data = await data.find({});
      console.log(data[0]);
    }
  }
  async save(value) {
    if(value.action.action === 'add'){
      let record = new data(value);
      await record.save();
      console.log('note save');
    }
    
  }
}
module.exports = Result;