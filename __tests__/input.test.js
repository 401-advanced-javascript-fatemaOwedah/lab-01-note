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
    expect(notee.actions('a', 'there is the note','category','school')).toEqual({action: 'add', playload: 'there is the note', category:'school'});
    expect(notee.actions('add', 'there is the note','category','school')).toEqual({action: 'add', playload: 'there is the note', category:'school'});
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
  it ('The user input --list',()=> {
    let notee = new Input();
    expect(notee.actions('list', 'school')).toEqual({action: 'list', category:'school'});
  });
  it ('The user input --delete',()=> {
    let notee = new Input();
    expect(notee.actions('delete', 'sfs2sff2')).toEqual({action: 'delete', id:'sfs2sff2'});
  });
});