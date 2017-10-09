
'use strict';
angular.module('myApp.SFCharGen', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/SFCharGen', {
            templateUrl: 'SFCharGen/SFCharGen.html',
            controller: 'SFCharGenCtrl'
        });
    }])

   .controller('SFCharGenCtrl', function ($scope, $http) {

        $scope.character = {//character.levels[0].selectedClass
            "name": null,
            "gender": null,
            "race":null,
            "theme":null,
            "alignment":null,
            "deity":null,
            "baseSpeed":3,
            "levels":
                [
                    {0:{"selectedClass": null, "classLevel": 1, "attributeModifiers": {}, "skillPoints": null}}
                ],
            "attributes":
                {
                    "allowedMod": 10,
                    "str": {"baseScore": 10, mod: 0, value: null},
                    "dex": {"baseScore": 10, mod: 0, value: null},
                    "con": {"baseScore": 10, mod: 0, value: null},
                    "int": {"baseScore": 10, mod: 0, value: null},
                    "wis": {"baseScore": 10, mod: 0, value: null},
                    "cha": {"baseScore": 10, mod: 0, value: null}
                },
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
        };
        $scope.setBaseAttribVals = function () {
            $scope.character.attributes.str.value += $scope.strScore();
            $scope.character.attributes.dex.value += $scope.dexScore();
            $scope.character.attributes.con.value += $scope.conScore();
            $scope.character.attributes.int.value += $scope.intScore();
            $scope.character.attributes.wis.value += $scope.wisScore();
            $scope.character.attributes.cha.value += $scope.chaScore();
        };

        $scope.strScore = function () {
            var score = $scope.character.attributes.str.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.str;
            }
            if ($scope.variableRaceBonusAttrib === "str") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.str.mod;
            return score;
        };
        $scope.dexScore = function () {
            var score = $scope.character.attributes.dex.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
            }
            if ($scope.variableRaceBonusAttrib === "dex") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.dex.mod;
            return score;
        };
        $scope.conScore = function () {
            var score = $scope.character.attributes.con.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con
            }
            if ($scope.variableRaceBonusAttrib === "con") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.con.mod;
            return score;
        };
        $scope.intScore = function () {
            var score = $scope.character.attributes.int.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
            }
            if ($scope.variableRaceBonusAttrib === "int") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.int.mod;
            return score;
        };
        $scope.wisScore = function () {
            var score = $scope.character.attributes.wis.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
            }
            if ($scope.variableRaceBonusAttrib === "wis") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.wis.mod;
            return score;
        };
        $scope.chaScore = function () {
            var score = $scope.character.attributes.cha.baseScore;
            if ($scope.races.selectedRace !== null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
            }
            if ($scope.variableRaceBonusAttrib === "cha") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }

            score += $scope.character.attributes.cha.mod;

            return score;
        };
//	$scope.dexScore = 	$scope.character.attributes.dex.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
//	$scope.conScore = 	$scope.character.attributes.con.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con;
//	$scope.intScore = 	$scope.character.attributes.int.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
//	$scope.wisScore = 	$scope.character.attributes.wis.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
//	$scope.chaScore = 	$scope.character.attributes.cha.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
        $scope.variableRaceBonusAttrib = null;
        $scope.variableThemeBonus = null;
        $scope.variableClassBonus = null;

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
                default:
            }
        };
        $scope.calcAttribModifier = function (attribValue) {
           // var score = attribValue;
           // var mod = Math.floor((attribValue - 10) / 2);
            return Math.floor((attribValue - 10) / 2); //mod// (mod>=0)?mod:0;
        };
        $scope.attribIncrease = function (attrib) {
            console.log("click to increase " + attrib);

            var allowed = $scope.character.attributes.allowedMod;
            console.log("allowed:" + $scope.character.attributes.allowedMod);
            var total = $scope.character.attributes.cha.mod +
                $scope.character.attributes.wis.mod +
                $scope.character.attributes.int.mod +
                $scope.character.attributes.con.mod +
                $scope.character.attributes.dex.mod +
                $scope.character.attributes.str.mod;
            console.log("total:" + total);
            if (total >= allowed) return false;
            switch (attrib) {
                case 'str':
                    if ($scope.strScore() >= 18) return false;
                    $scope.character.attributes.str.mod++;
                    console.log("str:" + $scope.character.attributes.str.mod + "Score:" + $scope.strScore());
                    break;
                case 'dex':
                    if ($scope.dexScore() >= 18) return false;
                    $scope.character.attributes.dex.mod++;
                    break;
                case 'con':
                    if ($scope.conScore() >= 18) return false;
                    $scope.character.attributes.con.mod++;
                    break;
                case 'int':
                    if ($scope.intScore() >= 18) return false;
                    $scope.character.attributes.int.mod++;
                    break;
                case 'wis':
                    if ($scope.wisScore() >= 18) return false;
                    $scope.character.attributes.wis.mod++;
                    break;
                case 'cha':
                    if ($scope.chaScore() >= 18) return false;
                    $scope.character.attributes.cha.mod++;
                    break;
                default:
            }
        };
        $scope.attribDecrease = function (attrib) {
          //  var allowed = $scope.character.attributes.allowedMod;
            var total = $scope.character.attributes.cha.mod +
                $scope.character.attributes.wis.mod +
                $scope.character.attributes.int.mod +
                $scope.character.attributes.con.mod +
                $scope.character.attributes.dex.mod +
                $scope.character.attributes.str.mod;
            if (total <= 0) return false;
            switch (attrib) {
                case 'str':
                    if ($scope.strScore() <= $scope.character.attributes.str.value) return false;
                    $scope.character.attributes.str.mod--;
                    break;
                case 'dex':
                    if ($scope.dexScore() <= $scope.character.attributes.dex.value) return false;
                    $scope.character.attributes.dex.mod--;
                    break;
                case 'con':
                    if ($scope.conScore() <= $scope.character.attributes.con.value) return false;
                    $scope.character.attributes.con.mod--;
                    break;
                case 'int':
                    if ($scope.intScore() <= $scope.character.attributes.int.value) return false;
                    $scope.character.attributes.int.mod--;
                    break;
                case 'wis':
                    if ($scope.wisScore() <= $scope.character.attributes.wis.value) return false;
                    $scope.character.attributes.wis.mod--;
                    break;
                case 'cha':
                    if ($scope.chaScore() <= $scope.character.attributes.cha.value) return false;
                    $scope.character.attributes.cha.mod--;
                    break;
                default:
            }
        };
        $scope.calcSkillTotal = function (skill, attrib) {
            if ($scope.skillList[skill].useUntrained === false
                && $scope.character.skillRanks[skill].ranks === 0) return "-";
            var total = 0;
            //Ranks
            total += $scope.character.skillRanks[skill].ranks;
            //ClassBonus
            total += $scope.calcClassSkillMod(skill);
            //Is ClassSkill and theme Based Class Skill
            if ($scope.character.levels[0].selectedClass !== undefined && $scope.themes.selectedTheme !== null) {
                total += ($scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
                    && $scope.themes.availableThemes[$scope.themes.selectedTheme].skillModifiers[skill].classSkill) ? 1 : 0;
            }
            //AttribValue
            total += $scope.getAttribMod(attrib);
            //RaceBonus
            total += $scope.calcRacialSkillMod(skill);

            return total;
        };
        $scope.calcRacialSkillMod = function (skill) {
            return ($scope.races.selectedRace !== null)
                ? $scope.races.availableRaces[$scope.races.selectedRace].skillModifiers[skill] :
                0;


        };
        $scope.calcClassSkillMod = function (skill) {
            return ($scope.character.levels[$scope.currentLevel()].selectedClass !== undefined
                && $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass] !== undefined
                && $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
                && $scope.character.skillRanks[skill].ranks > 0) ? 3 : 0;
        };
        $scope.currentLevel = function(){
            return $scope.character.levels.length -1;
        };
        $scope.skillIncrease = function (skill) {
            var allowed = $scope.totalSkillPoints();
            var total = $scope.totalRanks();
            //console.log("total:" + total + " Allowed:" + allowed);
            if (total >= allowed) return false;
            if ($scope.character.skillRanks[skill].ranks >= $scope.character.level) return false;
            $scope.character.skillRanks[skill].ranks++;
            $scope.totalSkillPoints();
        };
        $scope.skillDecrease = function (skill) {
            // var allowed =  ( + $scope.getAttribMod("int"))*$scope.character.level;
            var total = 0;
            for (var x in $scope.character.skillRanks) total += x.ranks;
            if (total <= 0) return false;
            $scope.character.skillRanks[skill].ranks--;
            $scope.totalSkillPoints();
        };
        $scope.getSkillRank = function(skill){
           // console.log(skill);
            return ($scope.character.skillRanks[skill].ranks)?$scope.character.skillRanks[skill].ranks:0;
        };
        $scope.getSkillRanksPerLevel = function(level){
            if(!level) {
                level = $scope.currentLevel();
            }
           return $scope.classes[level].skillRanksPerLvl;
        };

        $scope.totalSkillPoints = function () {
            var total = 0;
            var levelCount = $scope.currentLevel();
            for(var i=0;i<=levelCount;i++) {
                if ($scope.character.levels[$scope.currentLevel()].selectedClass !== undefined) {
                    total += $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillRanksPerLvl
                        + $scope.getAttribMod("int");
                }
            }
            return total ;
        };
        $scope.totalRanks = function () {
            var total = 0;
            for (var x in $scope.skillList) total += $scope.character.skillRanks[x].ranks;
            return total;
        };
        $scope.availSkillPoints = function () {
            var pts = $scope.totalSkillPoints() - $scope.totalRanks();
            return (pts > 0) ? pts : 0;
        };
        //INITIATIVE
        $scope.getMiscInitMods = function(){
            var total = 0;
            total += 0;
            return total;
        };
        $scope.calcInitiativeTotal = function(){
            var total = 0;
            total += $scope.getAttribMod("dex");
            total += $scope.getMiscInitMods();
            return total;
        };
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
       $http.get('SFCharGen/json/classes.json')
           .then(function(res){
               $scope.classes = res.data;
           });
       $http.get('SFCharGen/json/races.json')
           .then(function(res){
               $scope.races = res.data;
           });
       $http.get('SFCharGen/json/alignments.json')
           .then(function(res){
               $scope.alignments = res.data;
           });
    });