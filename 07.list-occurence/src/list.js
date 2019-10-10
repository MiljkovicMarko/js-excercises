/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {
    return list.indexOf(element)>=0;
  }

  return {
    has: has
  };
};