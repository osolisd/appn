angular.module('numerical-analysis')
.controller('SecantCrtl',function($state, Secant, $stateParams, $mdSidenav, $mdUtil, MethodCommons){
	'use strict';
  var self = this;
  var originatorEv;

  self.availableMethods = MethodCommons.getAvailableMethods();

  self.results = [];

  initParams();

  self.Calculate = function calculatebysecant(){
    Secant.CalculateBySecant(self.func,self.a,self.b,self.nmax,self.tol,self.delta);
    self.result = Secant.getResult();
    //self.reason = Secant.getReason();
    self.arrx = Secant.getx();
    self.arrf = Secant.getfx();
    self.arrError = Secant.getError();
    self.arrDelta = Secant.getDelta();
  };

  self.openMethodsMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  self.onMethodSelected = function(method){
    $state.go('methods.non-lineal.' + method.replace(/\s/g, '-'), { fn: self.params.fn });
  }

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };

  function initParams() {
    self.func = $stateParams.fn || '';
    self.varName = $stateParams.x || 'x';
    self.a = $stateParams.a || 0;
    self.b = $stateParams.b || 0;
    self.nmax = $stateParams.nmax || 100;
    self.tol = $stateParams.tol || 0.0;
    self.delta = $stateParams.delta || 0.0;
  }

})
