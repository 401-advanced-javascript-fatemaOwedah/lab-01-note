'use strict';
const Result = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
describe('Notes Module', ()=>{
  it ('Do not give me any result',()=> {
    let resultt = new Result();
    resultt.execute('');
    resultt.add('');
    expect(console.log).not.toHaveBeenCalled();
  });
  it ('give result',()=> {
    let resultt = new Result();
    resultt.execute('write');
    resultt.add('write');
    expect(console.log).toHaveBeenCalled();
  });
});