angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.newton', {
    url : '/newton',
    templateUrl : 'views/methods/newton/newton.html',
    controller : 'NewtonCtrl as newtonCtrl',
    params : {
      fn : null
    }
  });
});
