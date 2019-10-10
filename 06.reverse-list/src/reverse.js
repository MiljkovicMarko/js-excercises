/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
  'use strict';

  function reverseList(list) {
    if (!Array.isArray(list) && list!==null) return [list];
    else if (list===null || list===[]) return [];
    return list.reverse();
  }

  return {
    reverseList: reverseList
  };
};