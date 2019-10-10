/**
 * Write a function that sums the numbers from 1 to n, but only multiples
 * of three or five are considered in the sum,
 * e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
 *
 * n cannot be negative in this excersise.
 */
var Sum = function () {
  'use strict';

  function sumNumbers1(n) {
    let nabs = Math.abs(n);
    return Math.sign(n) * (nabs * (nabs + 1) / 2);
  }

  function sumN(n1,n2){
    return sumNumbers1(Math.floor(n1 / n2)) * n2;
  }

  function sumNumbers35(n) {
    if (n < 0) throw new Error('No negative numbers allowed');
    return sumN(n,5) + sumN(n,3) - sumN(n,15);
  }

  return {
    sumNumbers: sumNumbers35
  };
};