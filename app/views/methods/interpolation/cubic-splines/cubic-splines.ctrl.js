angular.module('numerical-analysis')
.controller('CubicSplinesCtrl', function (CubicSplines, Utils) {

  var self = this;

  self.results = [];

  self.xs = [50, 200, 350];
  self.ys = [50, 149.49363435889023, 249.12670270278602];

  self.calculate = function () {
    var res = CubicSplines.calculate(self.xs, self.ys);
    for(var i = 0; i < res.length; i++) {
      var result = {};
      result.desc = 'From x = ' + self.xs[i] + ' to x = ' + self.xs[i + 1] + ':';
      var splineStr = res[i].a;
      splineStr += ' + ' + res[i].b + '(x - ' + res[i].x + ')';
      splineStr += ' + ' + res[i].c + '(x - ' + res[i].x + ')^2';
      splineStr += ' + ' + res[i].d + '(x - ' + res[i].x + ')^3';
      result.spline = splineStr;
      self.results.push(result);
    }
    console.log();
  };
});
