/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function () {
  'use strict';

  function sumNumbers(n) {
    let nabs = Math.abs(n);
    return Math.sign(n) * (nabs * (nabs + 1) / 2);
  }

  function multNumbers(n) {
    var f = [];
    function factorial (n) {
      if (n == 0 || n == 1)
        return 1;
      if (f[n] > 0)
        return f[n];
      return f[n] = factorial(n-1) * n;
    } 
    return factorial(n)
  }

  function calculate(n, opts) {
    switch (opts.mode) {
      case 'sum':
        return sumNumbers(n)
        break;
      case 'product':
        return multNumbers(n);
        break;
      default:
        throw new Error('Invalid calculation mode.');
    }
  }

  return {
    calculate: calculate
  };
};