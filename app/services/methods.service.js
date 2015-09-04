angular.module('numerical-analysis')
.factory('Methods', function methodsService() {
  'use strict';

  function evaluate(fn, vars){
    return Parser.parse(fn).evaluate(vars);
  }

  function fixedPoint(args) {
    return true;
  }

  function newtonRaphson(args) {
    // body...
  }

  return {
    'evaluate' : evaluate,
    'newtonRaphson' : newtonRaphson,
    'fixedPoint' : fixedPoint
  };
})
