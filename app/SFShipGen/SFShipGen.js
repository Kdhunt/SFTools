'use strict';

angular.module('StarfinderApp.SFShipGen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SFShipGen', {
    templateUrl: 'SFShipGen/SFShipGen.html',
    controller: 'SFShipGenCtrl'
  });
}])

.controller('SFShipGenCtrl', [function() {

}]);