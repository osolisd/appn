angular.module('numerical-analysis')
.factory('Methods', function methodsService() {
  'use strict';

  function fixedPoint(args) {
    return true;
  }

  function newtonRaphson(args) {
    // body...
  }

  return {
    'newtonRaphson' : newtonRaphson,
    'fixedPoint' : fixedPoint
  };
})
