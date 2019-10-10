/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {
    return list1.concat(list2);
  }

  return {
    concatenate: concatenate
  };
};