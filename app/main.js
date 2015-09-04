angular.module('numerical-analysis', ['ui.router', 'ngMaterial'])
.config(function($urlRouterProvider){
  'use strict';
  $urlRouterProvider.otherwise('/');
});
