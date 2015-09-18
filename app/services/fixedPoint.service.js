angular.module('numerical-analysis')
.factory('FixedPoint', function(MethodCommons) {
  'use strict';

  function calculate(fn, gn, varName, x,nmax,tol,delta){
    var i=0;
    var x = x;
    var err = 1;
    var data = {};
    var q = x;
    var variables  = {};
    variables[varName] = x;
    var fx = MethodCommons.evaluate(fn,variables);
    while (err > tol && i < nmax && fx > delta){
      q = x;
      x = MethodCommons.evaluate(gn,variables);
      variables[varName] = x;
      fx = MethodCommons.evaluate(fn,variables);
      err = Math.abs(x-q);
      data.push(angular.merge({fx : fx, error : err},variables));
    }
    return data;
  };

  return {
    calculate: calculate
  };
});