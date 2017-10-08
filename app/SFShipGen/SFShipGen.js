'use strict';

angular.module('myApp.SFShipGen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SFShipGen', {
    templateUrl: 'SFShipGen/SFShipGen.html',
    controller: 'SFShipGenCtrl'
  });
}])

.controller('SFShipGenCtrl', [function() {

}]);