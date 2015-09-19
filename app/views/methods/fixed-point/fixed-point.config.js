angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.fixed-point', {
    url: '/fixed-point',
    templateUrl: 'views/methods/fixed-point/fixed-point.html',
    controller: 'FixedPointCtrl as fixedPoint',
    params : {
        fn : null
    }
  });
});
