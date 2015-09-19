angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.bisection', {
    url : '/bisection',
    templateUrl : 'views/methods/bisection/bisection.html',
    controller : 'BisectionCtrl as bisection',
    params : {
      fn : null
    }
  });
});
