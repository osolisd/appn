angular.module('numerical-analysis')
.factory('FixedPoint', function(MethodCommons) {
  'use strict';

  function calculate(fn, gn,x0,nmax,tol,delta){
    var i=0;
    var x = x0;
    var err = 1;
    var data = {};
    var q = x0;
    var fx = MethodCommons.evaluate(fn,x0);
    while (err > tol && i < nmax && fx > delta){
      q = x;
      x = MethodCommons.evaluate(gn,x);
      fx = MethodCommons.evaluate(fn,x);
      err = Math.abs(x-q);
      data.push(angular.merge({fx : fx, gx : x, error : err}));
    }
    return data;
  };

  return {
    calculate: calculate
  };
});