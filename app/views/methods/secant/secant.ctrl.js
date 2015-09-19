angular.module('numerical-analysis')
.controller('secantCrtl',function(Secant){
	var self = this;

	self.Calculate = function calculatebysecant(){
		Secant.CalculateBySecant(self.func,self.a,self.b,self.nmax,self.tol,self.delta);
		self.result = Secant.getResult();
		self.reason = Secant.getReason();
		self.arrx = Secant.getx();
		self.arrf = Secant.getfx();
		self.arrError = Secant.getError();
	}

})