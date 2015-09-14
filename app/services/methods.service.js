angular.module('numerical-analysis')
.factory('MethodCommons', function methodCommonsService() {
  'use strict';

  function evaluate(fn, vars){
    return Parser.parse(fn).evaluate(vars);
  }

  return {
    'evaluate' : evaluate
  };
})
