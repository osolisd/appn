angular.module('numerical-analysis')
.controller('falsePositionCtrl', function($stateParams, $mdSidenav, $mdUtil, FalsePosition){
  'use strict';

  var self = this;

  self.results = [];

  initParams();

  self.calculate = function (form){
    if(form.$invalid) {
      return;
    }
    self.results = FalsePosition.calculate(
      self.params.fn,
      self.params.varName,
      self.params.a,
      self.params.b,
      self.params.nmax,
      self.params.tol,
      self.params.delta);
  };

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };

  function initParams() {
    self.params = {};
    self.params.fn = $stateParams.params.fn || 'exp(x) + 3 * sin(x) - (x^3) + 4 * x - 2';
    self.params.varName = $stateParams.params.x || 'x';
    self.params.a = $stateParams.params.a || -2;
    self.params.b = $stateParams.params.b || -3;
    self.params.nmax = $stateParams.params.nmax || 100;
    self.params.tol = $stateParams.params.tol || 0.0;
    self.params.delta = $stateParams.params.delta || 0.0;
  }
});
