/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {
    let retList=[];
    for (let i=0;i<Math.max(list1.length,list2.length);i++){
      list1[i] && retList.push(list1[i]);
      list2[i] && retList.push(list2[i]);
    }
    return retList;
  }

  return {
    combine: combine
  };
};