'use strict';

// Declare app level module which depends on views, and components
angular.module('StarfinderApp', [
  'ngRoute',
  'StarfinderApp.SFCharGen',
  'StarfinderApp.SFShipGen',
  'StarfinderApp.version'
]).
directive("variableRaceBonus", function() {
    return {
        template : "<span ng-show=\"races.selectedRace == 'Human'\">+{{races.availableRaces[races.selectedRace].attributeModifiers.any}} to:</span> " +
        "<select ng-show=\"races.selectedRace == 'Human'\" ng-change='addRaceBonus()' ng-model='variableRaceBonusAttrib'>" +
        "<option value=''>Choose...</option>" +
        "<option ng-repeat='x in attribList' value='{{x}}'>{{x}}</option>"+
        "</select>"
    };
}).
directive('charGenAttributesBlock', function() {
    return {
        templateUrl : 'SFCharGen/attribBlock.html'
    }
}).
directive('charGenSkillsBlock', function() {
    return {
        templateUrl : 'SFCharGen/skillsBlock.html'
    }
}).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/SFCharGen'});
}])
;
