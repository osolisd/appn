angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.false-position', {
    url : '/false-position',
    templateUrl : 'views/methods/false-position/false-position.html',
    controller : 'FalsePositionCtrl as falsePosCtrl',
    params : {
      fn : null
    }
  });
});
