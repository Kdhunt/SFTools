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
        template : "<span ng-show=\"character.race == 'Human'\">+{{races.availableRaces[character.race].attributeModifiers.any}} to:</span> " +
        "<select ng-show=\"character.race == 'Human'\" ng-change='addRaceBonus()' ng-model='variableRaceBonusAttrib'>" +
        "<option value=''>Choose...</option>" +
        "<option ng-repeat='x in attribList' value='{{x}}'>{{x}}</option>"+
        "</select>"
    };
}).
directive('charGenAttributesBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/attribBlock.html'
    }
}).
directive('charGenSkillsBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/skillsBlock.html'
    }
}).
directive('charGenInitiativeBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/initiativeBlock.html'
    }
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
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/SFCharGen'});
}])
;
