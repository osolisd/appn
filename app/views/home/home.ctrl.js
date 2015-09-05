angular.module('numerical-analysis')
.controller('HomeCtrl', function($mdSidenav, $mdUtil, Methods){
  'use strict';
  var self = this;

  self.evaluate = function evaluateFn(){
    console.log(Methods.bisection(self.fn, 'x', -3, -2, 800, 0, 0));
  }

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };
});
