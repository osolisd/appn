angular.module('numerical-analysis')
.controller('JacobiCtrl', function (Jacobi) {

  var self = this;
  self.file = null;

  self.A = [
    [2, 1],
    [5, 7]
  ];

  self.b = [11, 13];

  self.x = [0, 0];

  self.calculate = function () {
    self.res = Jacobi.calculate(self.A, self.b, self.x, 100, 0, 0);
  };
})
