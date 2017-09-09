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
        template : "<span ng-show='races.selectedRace == 1'>+{{races.availableRaces[races.selectedRace].attributeModifiers.any}} to:</span> " +
        "<select ng-show='races.selectedRace == 1' ng-change='addRaceBonus()' ng-model='variableRaceBonusAttrib'>" +
        "<option value=''>Choose...</option>" +
        "<option value='str'>STR</option>" +
        "<option value='dex'>DEX</option>" +
        "<option value='con'>CON</option>" +
        "<option value='int'>INT</option>" +
        "<option value='wis'>WIS</option>" +
        "<option value='cha'>CHA</option>" +
        "</select>"
    };
}).
directive('attribInRange', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function attribInRangeValidation(value) {
                if (value <= 18) {
                    mCtrl.$setValidity('attribInRange', true);
                } else {
                    mCtrl.$setValidity('attribInRange', false);
                }
                return value;
            }
            mCtrl.$parsers.push(attribInRangeValidation);
        }
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
