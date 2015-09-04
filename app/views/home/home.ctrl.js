angular.module('numerical-analysis')
.controller('HomeCtrl', function($mdSidenav, $mdUtil, Methods){
  'use strict';
  var self = this;

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };
});
