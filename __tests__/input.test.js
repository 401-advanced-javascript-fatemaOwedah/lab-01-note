'use strict';
const Input = require('../lib/input.js');
jest.spyOn(global.console, 'log');
describe('Input Module', ()=>{
  it ('The user input something insted of -a , --add',()=> {
    let notee = new Input();
    notee.actions('-sf');
    expect(console.log).toHaveBeenCalled();
  });
  it ('The user input -a , --add',()=> {
    let notee = new Input();
    expect(notee.actions('a')).toEqual('add');
    expect(notee.actions('add')).toEqual('add');
  });
  it ('The user not write a note',()=> {
    let notee = new Input();
    notee.valid(true);
    expect(console.log).toHaveBeenCalled();
  });
  it ('The user write a note',()=> {
    let notee = new Input();
    expect(notee.valid('val')).toEqual('val');
  }); 
});