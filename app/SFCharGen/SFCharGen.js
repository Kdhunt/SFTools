
'use strict';
var SFCharGen = angular.module('myApp.SFCharGen', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/SFCharGen', {
            templateUrl: 'SFCharGen/SFCharGen.html',
            controller: 'SFCharGenCtrl'
        });
    }]);
angular.module('myApp.SFCharGen')
   .controller('SFCharGenCtrl', function ($scope, $http) {
        $scope.character = {
            "name": null,
            "gender": null,
            "race":null,
            "theme":null,
            "alignment":null,
            "deity":null,
            "baseSpeed":3,
            "levels":

                    {0:{
                        "selectedClass": null,
                        "classLevel": 1,
                        "attributeModifiers": {},
                        "skillPoints": null,
                        "skillRanks": {
                            "acrobatics":
                                {
                                    "ranks": 0
                                }
                            , "athletics":
                                {
                                    "ranks": 0
                                }
                            , "bluff":
                                {
                                    "ranks": 0
                                }
                            , "computers":
                                {
                                    "ranks": 0
                                }
                            , "culture":
                                {
                                    "ranks": 0
                                }
                            , "diplomacy":
                                {
                                    "ranks": 0
                                }
                            , "disguise":
                                {
                                    "ranks": 0
                                }
                            , "engineering":
                                {
                                    "ranks": 0
                                }
                            , "intimidate":
                                {
                                    "ranks": 0
                                }
                            , "lifescience":
                                {
                                    "ranks": 0
                                }
                            , "medicine":
                                {
                                    "ranks": 0
                                }
                            , "mysticism":
                                {
                                    "ranks": 0
                                }
                            , "perception":
                                {
                                    "ranks": 0
                                }
                            , "physicalscience":
                                {
                                    "ranks": 0
                                }
                            , "piloting":
                                {
                                    "ranks": 0
                                }
                            , "sensemotive":
                                {
                                    "ranks": 0
                                }
                            , "sleightofhand":
                                {
                                    "ranks": 0
                                }
                            , "stealth":
                                {
                                    "ranks": 0
                                }
                            , "survival":
                                {
                                    "ranks": 0
                                }
                        }
                    }
                }
                ,
            "attributes":
                {
                    "allowedMod": 10,
                    "str": {"baseScore": 10, "mod": 0, "value": null},
                    "dex": {"baseScore": 10, "mod": 0, "value": null},
                    "con": {"baseScore": 10, "mod": 0, "value": null},
                    "int": {"baseScore": 10, "mod": 0, "value": null},
                    "wis": {"baseScore": 10, "mod": 0, "value": null},
                    "cha": {"baseScore": 10, "mod": 0, "value": null}
                }
        };

// Attrib vars
       $scope.strScore = function () {
           var score = $scope.character.attributes.str.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.str;
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "str") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }
           score += $scope.character.attributes.str.mod;
           return score;
       };
       $scope.dexScore = function () {
           var score = $scope.character.attributes.dex.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "dex") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }
           score += $scope.character.attributes.dex.mod;
           return score;
       };
       $scope.conScore = function () {
           var score = $scope.character.attributes.con.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "con") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }
           score += $scope.character.attributes.con.mod;
           return score;
       };
       $scope.intScore = function () {
           var score = $scope.character.attributes.int.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "int") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }
           score += $scope.character.attributes.int.mod;
           return score;
       };
       $scope.wisScore = function () {
           var score = $scope.character.attributes.wis.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "wis") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }
           score += $scope.character.attributes.wis.mod;
           return score;
       };
       $scope.chaScore = function () {
           var score = $scope.character.attributes.cha.baseScore;
           if ($scope.races !== undefined && $scope.races.selectedRace !== null) {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
           }
           if ($scope.races !== undefined && $scope.variableRaceBonusAttrib === "cha") {
               score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
           }

           score += $scope.character.attributes.cha.mod;

           return score;
       };
       $scope.calcAttribModifier = function (attribValue) {
           // var score = attribValue;
           // var mod = Math.floor((attribValue - 10) / 2);
           return Math.floor((attribValue - 10) / 2); //mod// (mod>=0)?mod:0;
       };
       $scope.getAttribMod = function (attrib) {
           switch (attrib) {
               case 'str':
                   return $scope.calcAttribModifier($scope.strScore());
                   break;
               case 'dex':
                   return $scope.calcAttribModifier($scope.dexScore());
                   break;
               case 'con':
                   return $scope.calcAttribModifier($scope.conScore());
                   break;
               case 'int':
                   return $scope.calcAttribModifier($scope.intScore());
                   break;
               case 'wis':
                   return $scope.calcAttribModifier($scope.wisScore());
                   break;
               case 'cha':
                   return $scope.calcAttribModifier($scope.chaScore());
                   break;
           };

       };

//	$scope.dexScore = 	$scope.character.attributes.dex.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
//	$scope.conScore = 	$scope.character.attributes.con.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con;
//	$scope.intScore = 	$scope.character.attributes.int.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
//	$scope.wisScore = 	$scope.character.attributes.wis.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
//	$scope.chaScore = 	$scope.character.attributes.cha.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
       $scope.variableRaceBonusAttrib = null;
       $scope.variableThemeBonus = null;
       $scope.variableClassBonus = null;




       //END attrib vars
        $scope.currentLevel = function(){
            return $scope.character.levels.hasOwnProperty.length -1;
        };
       $scope.characterTotalSkillRanks = function(skill){
           var total=0;
           for(var c in $scope.character.levels){
               for(var i in c.skillRanks){
                   total += i.ranks;
               }
           }
           return total;
       }

       $http.get('SFCharGen/json/attribList.json')
           .then(function(response) {
               $scope.attribList = response.data;
           });
       $http.get('SFCharGen/json/attribList.json')
           .then(function(res){
               $scope.attribList = res.data;
           });
       $http.get('SFCharGen/json/homeworlds.json')
           .then(function(res){
               $scope.homeworlds = res.data;
           });
       $http.get('SFCharGen/json/dieties.json')
           .then(function(res){
               $scope.dieties = res.data;
           });
       $http.get('SFCharGen/json/skillList.json')
           .then(function(res){
               $scope.skillList = res.data;
           });
       $http.get('SFCharGen/json/themes.json')
           .then(function(res){
               $scope.themes = res.data;
           });

       $http.get('SFCharGen/json/races.json')
           .then(function(res){
               $scope.races = res.data;
           });

       $http.get('SFCharGen/json/alignments.json')
           .then(function(res){
               $scope.alignments = res.data;
           });
       $http.get('SFCharGen/json/classes.json')
           .then(function(res){
               $scope.classes = res.data;
           });
   });
