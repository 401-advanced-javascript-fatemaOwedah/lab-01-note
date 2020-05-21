
'use strict';
const data = require('./model/notes-schema');
class Result{
  async list(value){
    if(value.action === 'list'){
      let data1 = await data.find({});
      if(value.category === true){
        for(let i=0; i < data1.length; i++){
          console.log(`${data1[i].playload}`);
          console.log(`Category: ${data1[i].category} ID: ${data1[i]._id}`);
        }
      }else{
        for(let i=0; i < data1.length; i++){
          if(data1[i].category == value.category.toUpperCase()){
            console.log(`${data1[i].playload}`);
            console.log(`Category: ${data1[i].category} ID: ${data1[i]._id}`);
          }
        }
      } 
    }
  }
  async save(value) {
    if(value.action=== 'add'){
      let record = new data(value);
      await record.save();
      console.log('Note save' , value.playload);
    }  
  }
  async delete(value) {
    if(value.action=== 'delete'){
      await data.findByIdAndDelete(value.id);
      console.log(`Deleted Note ${value.id}`);
    }  
  }
}
module.exports = Result;