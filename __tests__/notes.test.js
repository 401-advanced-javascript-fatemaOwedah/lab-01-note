'use strict';
const Result = require('../lib/notes.js');
require('@code-fellows/supergoose');
jest.spyOn(global.console, 'log');
describe('Notes Module', ()=>{
  it ('Do not give me any result',()=> {
    let resultt = new Result();
    let obj = {action: {action: ''}};
    console.log('the imp ------>>', obj.action.action);
    resultt.add(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it ('Do give me list',()=> {
    let resultt = new Result();
    let obj = {action: 'list' , category: true};
    resultt.list(obj);
    expect(console.log).toHaveBeenCalled();
  });

});