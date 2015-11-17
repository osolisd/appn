angular.module('numerical-analysis')
    .factory('NewtonInterpolation', function newtonInterpolationService(MethodCommons){
        'use strict';

        function calculate(nPoints,xs, ys)

        {
            var differences;
            differences = new Array(nPoints)(nPoints);
            if(xs.length !== ys.length) return;
            if(xs.length < 2) return;

            for(var i= 0; i <nPoints; i++){
                differences[i][0] = ys[i];
            }

            for(var i = 0; i < nPoints; i++){
                for(var j = 1; j < i+1; j++){
                    differences[i][j] = (differences[i][j-1] - differences[i-1][j-1])
                        /(xs[i] - xs[i - j]);
                }
            }

            var poly = differences[0][0];
            var temp = "";
            for (var i = 1; i < nPoints; i++){
                if(i>1) temp = "";
                temp += "(x" + (x[i-1] < 0.0 ? "+" : "-")
                    + Math.abs(x[i-1]) + ")";
                poly += "\n" + (differences[i][i] > 0 ? "+" : "")
                    + (differences[i][i] + "*" + temp);
            }

            return poly;
        }

        return {
            'calculate': calculate
        };


    });
