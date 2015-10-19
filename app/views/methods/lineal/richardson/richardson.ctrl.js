	angular.module('numerical-analysis')
.controller('richardsonCtrl', function ($mdSidenav, $mdUtil,Richardson,Utils) {

  var self = this;
  self.fileA = null;
  self.fileb = null;
  self.filex = null;

  self.reason = ""


  self.calculate = function () {

    var matA = Utils.parseCSV(self.fileA, '\n', ';').map(function (row) {
      return row.map(parseFloat);
    });
	
	var matI = Utils.parseCSV(self.fileI, '\n', ';').map(function (row) {
      return row.map(parseFloat);
    });
	
    var vectB = Utils.parseCSV(self.fileb, '\n', ';')[0].map(parseFloat);
    
    var vectX = Utils.parseCSV(self.filex, '\n', ';')[0].map(parseFloat);

    self.res = Richardson.calculate(matA, matI, vectB, vectX, self.nmax, self.delta, self.tol);
    self.reason = Richardson.getReason();
  }

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.getNumber = function(num) {
    return new Array(num);   
  }

    self.closeInfo = function () {
    $mdSidenav('info').close();
  };
})
