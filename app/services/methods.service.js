angular.module('numerical-analysis')
.factory('Methods', function methodsService() {
  'use strict';

  function evaluate(fn, vars){
    return Parser.parse(fn).evaluate(vars);
  }

  function bisection(fn, varName, a, b, nmax, tol, delta) {
    // var fn = args['fn'],
    //     varName = args['varName'],
    //     a = args['a'],
    //     b = args['b'],
    //     nmax = ['nmax'],
    //     tol = args['tol'] ? args['tol'] : 0,
    //     delta = args['delta'] ? args['delta'] : 0;

    var i = 0;
    var variables = {};
    variables[varName] = (a + b) / 2;
    var y = evaluate(fn, variables);
    var err = 1;
    var q = a;
    var data = [];
    while (i < nmax && Math.abs(y) > delta && err > tol) {
      var x = (a + b) / 2;
      variables[varName] = x;
      y = evaluate(fn, variables)
      err = Math.abs(x - q);
      var currentValue = {};
      currentValue[varName] = x;
      data.push(angular.merge({ fx : y, error : err }, currentValue));
      variables[varName] = a;
      if( (evaluate(fn, variables) * y) < 0) {
        b = x;
      }
      else {
        a = x;
      }
      q = x;
    }
    return data;
  }

  function fixedPoint(args) {
    return true;
  }

  function newtonRaphson(args) {
    // body...
  }

  return {
    'evaluate' : evaluate,
    'bisection' : bisection,
    'newtonRaphson' : newtonRaphson,
    'fixedPoint' : fixedPoint
  };
})
