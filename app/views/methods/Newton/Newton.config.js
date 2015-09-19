angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.Newton', {
    url : '/Newton',
    templateUrl : 'views/methods/Newton/Newton.html',
    controller : 'NewtonCtrl as Newton',
    params : {
      fn : null
    }
  });
});
