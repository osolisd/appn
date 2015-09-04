angular.module('numerical-analysis')
.factory('Methods', function methodsService() {
  'use strict';

  function fixedPoint(args) {
    // body...
  }

  function newtonRaphson(args) {
    // body...
  }

  return {
    'newtonRaphson' : newtonRaphson,
    'fixedPoint' : fixedPoint
  };
})
