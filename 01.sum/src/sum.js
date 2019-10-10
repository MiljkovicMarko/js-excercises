/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
    'use strict';

    function sumNumbers(n) {
      let nabs = Math.abs(n);
      return Math.sign(n)*(nabs*(nabs+1) / 2);
    }

    return {
      sumNumbers: sumNumbers
    };
};