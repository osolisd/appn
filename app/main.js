angular.module('numerical-analysis', ['ui.router', 'ngMaterial', 'ngMessages'])
.config(function($urlRouterProvider){
  'use strict';
  $urlRouterProvider.otherwise('/');
});
