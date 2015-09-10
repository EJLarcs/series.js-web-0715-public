'use strict';

function Series(ns){
  this.digits = ns.split('').map(Number);
};

Series.prototype.slices = function(num) {
  var array = [];
    debugger
  if (num <= this.digits.length) {
  for (var i = 0; i < array.length-(num-1); i++) array.push(this.digits.slice(i, i+num));
  }
  return array
}
