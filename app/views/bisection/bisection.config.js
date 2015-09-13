angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('bisection', {
    url : '/bisection',
    templateUrl : 'views/bisection/bisection.html',
    controller : 'bisectionCtrl as bisection'
  });
});
