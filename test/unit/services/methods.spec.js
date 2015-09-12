describe('Methods', function(){
  'use strict';

  var Methods;

  beforeEach(function(){
    module('numerical-analysis');

    inject(function(_Methods_) {
      Methods = _Methods_;
    });
  });

  describe('evaluate', function(){
    it('evaluates the function for the given variables', function(){
      var fn = '(exp(x)) + sin(x) + 4 * x';
      var vars = { x : 3.6578 };
      var result = Methods.evaluate(fn, vars);
      var nativeResult = Math.pow(Math.E, 3.6578) + Math.sin(3.6578) + 4 * 3.6578;
      expect(result - nativeResult).toBeLessThan(0.000000000002);
    });
  });
});
