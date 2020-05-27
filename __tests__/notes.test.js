'use strict';
const Result = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
describe('Notes Module', ()=>{
  it ('give me list and category',()=> {
    let resultt = new Result();
    let obj = {action: 'list' , category: true};
    resultt.list(obj)
      .then(()=>{expect(console.log).toHaveBeenCalled();}); 
  });
  it ('Do not give me category',()=> {
    let resultt = new Result();
    let obj = {action: 'list', category: 'light'};
    resultt.list(obj)
      .then(()=>{expect(console.log).toHaveBeenCalled();});
    
  });
  it ('Do not give me add',()=> {
    let resultt = new Result();
    let obj = {action: 'add', playload:'hi iam the new note' , category:'self'};
    resultt.save(obj)
      .then(()=>{expect(console.log).toHaveBeenCalled();});
  });
  it ('give me delete',()=> {
    let resultt = new Result();
    let obj = {action: 'delete', id:'5ec69431662d0810c36891f3'};
    resultt.delete(obj)
      .then(()=>{expect(console.log).toHaveBeenCalled();});
    
  });
});