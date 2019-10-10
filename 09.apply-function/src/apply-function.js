/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {
    for(let i=0;i<list.length;i++) list[i]=f(list[i]);
    return list;
  }

  return {
    applyFunction: applyFunction
  };
};