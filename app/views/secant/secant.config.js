angular.module('numerical-analysis')
.config(function($stateProvider){
	$stateProvider.state('secant', {
    url: '/secant',
    templateUrl: 'views/secant/secant.html',
    controller: 'secantCrtl as secant'
  });
})