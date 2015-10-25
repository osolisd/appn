angular.module('numerical-analysis')
.directive('nonLinealMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/method-menus/non-lineal/non-lineal-menu.html',
    controller: ['$scope', function($scope) {
      $scope.openNonLinealMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
      };
    }]
  };
});
