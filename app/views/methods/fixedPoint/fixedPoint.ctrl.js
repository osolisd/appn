angula.module('numerical-analysis')
.controller('FixedPointCtrl',function($state,$stateParamas, $mdSidenav, $mdUtil, FixedPoint, MethodCommons) {
  'use strict';

  var self = this;
  var originatorEV;


  self.availableMethods = MethodCommons.getAvailableMethods();

  self.result = [];

  initParams();

  self.calculate = function (form) {
    if (form.$invalid) {
      return;
    }

    self.result = FixedPoint.calculate(
      self.params.fn,
      self.params.gn,
      self.params.varName,
      self.params.x0,
      self.params.nmax,
      self.params.tol || 0.0,
      self.params.delta || 0.0);
  };

  self.openMethodsMenu = function ($mdOpenMenu, ev) {
    originatorEV = ev;
    $mdOpenMenu(ev);
  };

  self.onMethodSelected = function(method){
    $state.go('methods.' + method.replace(/\s/g, '-'), { fn: self.params.fn} );
  }

  self.toggleInfo = $mdUtil.debounce(function (){
    $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };

  function initParams() {
    self.params = {};
    self.params.fn = $stateParams.fn || 'exp(x) + 3 * sin(x) - (x^3) + 4 * x - 2';
    self.params.gn = $stateParams.gn || '(exp(x) + 3 * sin(x) + 4 * x - 2)^(1/3)';
    self.params.varName = $stateParams.x || 'x';
    self.params.x0 = $stateParams.x0 || -2.7;
    self.params.nmax = $stateParams.nmax || 100;
    self.params.tol = $stateParams.tol || 0.0;
    self.params.delta = $stateParams.delta || 0.0;
  }


});