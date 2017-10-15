'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.SFCharGen',
  //  'myApp.SFShipGen',
  'myApp.version'
]);
app.directive("variableRaceBonus", function() {
    return {
        template : "<span ng-show=\"races.selectedRace == 'Human'\">+{{races.availableRaces[races.selectedRace].attributeModifiers.any}} to:</span> " +
        "<select ng-show=\"races.selectedRace == 'Human'\" ng-change='addRaceBonus()' ng-model='variableRaceBonusAttrib'>" +
        "<option value=''>Choose...</option>" +
        "<option ng-repeat='x in attribList' value='{{x}}'>{{x}}</option>"+
        "</select>"
    };
}).
directive('charGenHealthAndResolveBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/healthandresolveBlock.html'
    }
}).
directive('charGenArmorClassBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/armorclassBlock.html'
    }
}).
directive('charGenSavingThrowsBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/savingthrowsBlock.html'
    }
}).
directive('charGenAttackBonusBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/attackBonusBlock.html'
    }
}).
directive('charGenWeaponsBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/weaponsBlock.html'
    }
}).
directive('charGenUpperBlock1', function() {
    return {
        templateUrl : 'SFCharGen/components/upperBlock1.html'
    }
}).
directive('charGenUpperBlock2', function() {
    return {
        templateUrl : 'SFCharGen/components/upperBlock2.html'
    }
}).
directive('charGenUpperBlock3', function() {
    return {
        templateUrl : 'SFCharGen/components/upperBlock3.html'
    }
}).
directive('charGenDescriptionBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/descriptionBlock.html'
    }
}).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
