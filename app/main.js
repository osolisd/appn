angular.module('numerical-analysis', ['ui.router','md.data.table', 'ngMaterial'])
.config(function($urlRouterProvider){
  'use strict';
  $urlRouterProvider.otherwise('/');
});
