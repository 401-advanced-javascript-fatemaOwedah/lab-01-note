
'use strict';
const data = require('./model/notes-schema');
class Result{
  async list(value){
    if(value.action === 'list' && value.category === true){
      let data1 = await data.find({});
      data1.forEach(val=>{
        console.log(`${val.playload}`);
        console.log(`Category: ${val.category} ID: ${val._id}`);
      });
    }else if(value.action === 'list'){
      let data1 = await data.find({category: value.category.toUpperCase()});
      data1.forEach(val=>{
        console.log(`${val.playload}`);
        console.log(`Category: ${val.category} ID: ${val._id}`);
      });
    }
  } 
  async save(value) {
    if(value.action=== 'add' && value.category === true){
      let record = new data(value);
      console.log('Note save' , value.playload);
      await record.save();
    }  
  }
  async delete(value) {
    if(value.action=== 'delete'){
      console.log(`Deleted Note ${value.id}`);
      await data.findByIdAndDelete(value.id);
    }  
  }
}
module.exports = Result;