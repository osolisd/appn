angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.false-position', {
    url : '/false-position',
    templateUrl : 'views/methods/false-position/false-position.html',
    controller : 'falsePositionCtrl as falsePos',
    params : {
      fn : null
    }
  });
});
