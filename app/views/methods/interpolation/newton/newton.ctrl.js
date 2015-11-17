angular.module('numerical-analysis')
    .controller('NewtonInterpolationCtrl', function (NewtonInterpolation, Utils) {

        var self = this;

        self.results;

        self.xsStr = null;
        self.ysStr = null;

        self.calculate = function () {

            var xs = Utils.parseCSV(self.xsStr, '\n', ';')[0].map(parseFloat);
            var ys = Utils.parseCSV(self.ysStr, '\n', ';')[0].map(parseFloat);
            var res = NewtonInterpolation.calculate(xs, ys);

            self.results = res;
        };


    });
