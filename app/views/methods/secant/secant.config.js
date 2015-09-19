angular.module('numerical-analysis')
.config(function($stateProvider){
	$stateProvider.state('methods.secant', {
    url: '/secant',
    templateUrl: 'views/methods/secant/secant.html',
    controller: 'SecantCrtl as secantCtrl'
  });
})
