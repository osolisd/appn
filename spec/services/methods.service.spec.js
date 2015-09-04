describe('Methods', function(){
  'use strict';

  var Methods;

  beforeEach(function(){
    module('numerical-analysis');

    inject(function(_Methods_) {
      Methods = _Methods_;
    });

    describe('fixedPoint', function(){
      it('returns true', function(){
        expect(Methods.fixedPoint()).toBe(true);
      });
    });
  });
});
