angular.module('numerical-analysis')
.controller('bisectionCtrl', function($state, $stateParams, $mdSidenav, $mdUtil, MethodCommons){
  'use strict';
  var self = this;

  self.evaluate = function evaluateFn(){
    console.log(MethodCommons.evaluate(self.fn, { x : self.x }))
  };

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };
});
