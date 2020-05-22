'use strict';
require('@code-fellows/supergoose');
const data = require('../lib/model/notes-collection');
const final = new data;
describe('Collection Module', ()=>{
  it('can get() a Note item()', ()=> {
    let obj = {category: 'dsf'};
    let obj1 = {playload: 'fsfsdf', category: 'dsf'};
    return final.create(obj1)
      .then(record => {
        return final.get(obj)
          .then(finalItem => {
            Object.keys(obj1).forEach(key=> {
              expect(finalItem[0][key]).toEqual(record[key]);
            });
          });
      });
  });
  it('can create() a Note item()', ()=> {
    let obj1 = {playload: 'fsfsdf', category: 'DSF'};
    return final.create(obj1)
      .then(record => {
        Object.keys(obj1).forEach(key=> {
          expect(record[key]).toEqual(obj1[key]);
        });
      });
  });
  it('can delete() a Note item()', ()=> {
    let obj1 = {playload: 'fsfsdf', category: 'DSF'};
    return final.create(obj1)
      .then(record => {
        return final.delete({id: record._id}).then(record =>{
          Object.keys(obj1).forEach(key=> {
            expect(record[key]).toEqual(obj1[key]);
          });
        });  
      });
  });
  it('can update() a Note item()', ()=> {
    let obj1 = {playload: 'fsfsdf', category: 'DSF'};
    return final.create(obj1)
      .then(record => {
        return final.update({id: record._id , playload: record.playload}).then(record =>{
          Object.keys(obj1).forEach(key=> {
            expect(record[key]).toEqual(obj1[key]);
          });
        });  
      });
  });
});