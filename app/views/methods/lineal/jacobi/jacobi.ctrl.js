angular.module('numerical-analysis')
.controller('JacobiCtrl', function () {

  var self = this;
  self.file = null;

  self.doSomething = function () {
    console.log(JSON.stringify(self.file));
  };
})
