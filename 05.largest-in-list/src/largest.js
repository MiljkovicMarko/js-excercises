/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
    if (list.length<1) throw new Error('List cannot be empty.');
    return Math.max(...list);
  }

  return {
    findLargest: findLargest
  };
};