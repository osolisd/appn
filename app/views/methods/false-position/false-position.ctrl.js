angular.module('numerical-analysis')
.controller('falsePositionCtrl', function($mdSidenav, $mdUtil, FalsePosition){
  'use strict';
  var self = this;

  self.fn = 'exp(x) + 3 * sin(x) - (x^3) + 4 * x - 2';
  self.varName = 'x';
  self.a = -2;
  self.b = -3;
  self.nmax = 100;
  self.tol = 0.0;
  self.delta = 0.0;

  self.calculate = function (){
    console.log(FalsePosition.calculate(
      self.fn,
      self.varName,
      self.a,
      self.b,
      self.nmax,
      self.tol,
      self.delta));
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
