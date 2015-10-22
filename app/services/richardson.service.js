angular.module('numerical-analysis')
.factory('Richardson', function RichardsonService(MethodCommons){
  'use strict';

  var reason="";
  var flag = false;

  function calculate(A, I, b, x, nmax, delta, tol) {
    var matA = $M(A);
	var matI = $M(I);
    var vectB = $V(b);
    var vectX = $V(x);

    var matT = matA.add(matI);
    var vectC = vectB.multiply(-1);
	
	

    var i=0

    
    var results = [];
    var i = 0
    for(i = 0; i < nmax; i++){
      var currentX = matT.multiply(vectX).add(vectC);
      var error = currentX.subtract(vectX).modulus();

      if(matA.multiply(currentX).subtract(vectB).modulus() <= delta || error <= tol) {
        if(error == tol){
          reason="Error is equal to tolerance";
          flag = true;
        }
        if(matA.multiply(currentX).subtract(vectB).modulus() == delta){
            reason="F(x) is equal to delta";
            flag = true;
          }
        results.push({
          x : currentX.elements,
          'error' : error
        });
        return results;
      }

      vectX = currentX;
      results.push({
        x : currentX.elements,
        'error' : error
      });
    }
    if(i==nmax){
      reason = "Max number of iterations reached"
      flag = true
    }

    return results;
  }

  if(!flag){
      reason = "The method converged"
    }

  function getReason(){
    console.log(reason)
    return reason;
  }

  return {
    'calculate' : calculate,
    'getReason' : getReason
  };
});
