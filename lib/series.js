'use strict';

function Series(ns){
  this.digits = ns.split('').map(Number);
};

Series.prototype.slices = function(num) {
  var array = [];

    if (num <= this.digits.length) {
      for (var i = 0; i < array.length-(num-1); i++) array.push(this.digits.slice(i, i+num));
    }
      else throw new Error('Slice size is too big.');
  return array
}
