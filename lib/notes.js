'use strict';
function Result(value) {
  this.execute(value);
  this.add(value);
}
Result.prototype.execute = function (value) {
  if (value) {
    console.log('Note Saved', value);
  }
};
Result.prototype.add = function (value) {
  if (value) {
    console.log({ txtMsg: value, id: Math.floor(Math.random() * 1000) });
  }
};
module.exports = Result;