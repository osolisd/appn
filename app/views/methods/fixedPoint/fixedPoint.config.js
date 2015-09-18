angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.fixedPoint', {
    url: '/fixedPoint',
    templateUrl: 'views/methods/fixedPoint/fixedPoint.html',
    controller: 'FixedPointCtrl as fixedPoint',
    params : {
        fn : null
    }
  });
});