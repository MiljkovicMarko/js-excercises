/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {
    let tbl2d=[[0,1,2,3,4,5]];
    for(let i=1;i<6;i++){
      tbl2d.push([i]);
      for(let j=1;j<6;j++){
        tbl2d[i].push(i*j);
      }
    }
    return tbl2d;
  }

  return {
    generate5: generate5
  };
};