'use strict';
const data = require('./model/notes-collection.js');
const notesSchema =new data;
class Result{
  async list(value){
    if(value.action === 'list'){
      let data1 = await notesSchema.get(value);
      data1.forEach(val=>{
        console.log(`${val.playload}`);
        console.log(`Category: ${val.category} ID: ${val._id}`);
      });
    }
  } 
  async save(value) {
    if(value.action === 'add' && value.category === true){     
      console.log('Note save' , value.playload);
      await notesSchema.create(value);
    }else if (value.action === 'add' && value.category != true){
      console.log('please complete the command line with --category');
    }  
  }
  async delete(value) {
    if(value.action=== 'delete'){
      console.log(`Deleted Note ${value.id}`);
      await notesSchema.delete(value);
    }  
  }
  async update(value) {
    if(value.action=== 'update'){
      console.log(`Updated Note ${value.playload}`);
      await notesSchema.update(value);
    }  
  }
}
module.exports = Result;