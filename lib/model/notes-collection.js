'use strict';
const data = require('./notes-schema');
class Resultt{
  async get(value){
    let data1 ;
    if(value.category === true){
      data1 = await data.find({});
    }else{
      data1 = await data.find({category: value.category.toUpperCase()});
    }
    return data1;       
  }
  async create(value){
    let record = new data(value);
    await record.save();
  }
  async delete(value){
    await data.findByIdAndDelete(value.id);
  }
  async update(value) {
    return await data.findByIdAndUpdate({_id: value.id},{playload: value.playload});
  }
}
module.exports = Resultt;