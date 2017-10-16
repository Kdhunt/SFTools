SFCharGen.directive('charGenSkillsBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/skillsBlock.html'
    }
});
SFCharGen.controller('SFCharGenSkillBlockCtrl', function($scope) {
    $scope.calcSkillTotal = function (skill, attrib) {
        if ($scope.skillList[skill].useUntrained === false
            && $scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks === 0) return "-";
        var total = 0;
        //Ranks
        total += $scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks;
        //ClassBonus
        total += $scope.calcClassSkillMod(skill);
        //Is ClassSkill and theme Based Class Skill
        if ($scope.character.levels[0].selectedClass !== null && $scope.themes.selectedTheme !== null) {
            total += ($scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
                && $scope.themes.availableThemes[$scope.themes.selectedTheme].skillModifiers[skill].classSkill) ? 1 : 0;
        }
        //AttribValue
        total += ($scope.getAttribMod !== undefined)?$scope.getAttribMod(attrib):0;
        //RaceBonus
        total += ($scope.calcRacialSkillMod !== undefined)?$scope.calcRacialSkillMod(skill):0;

        return total;
    };
    $scope.calcRacialSkillMod = function (skill) {
        return ($scope.races !== undefined && $scope.character.race !== null)
            ? $scope.races.availableRaces[$scope.character.race].skillModifiers[skill] :
            0;


    };
    $scope.calcClassSkillMod = function (skill) {
        return ($scope.character.levels[$scope.currentLevel()].selectedClass !== null
            && $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass] !== undefined
            && $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
            && $scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks > 0) ? 3 : 0;
    };
    $scope.skillIncrease = function (skill) {
        var allowed = $scope.totalSkillPoints();
        var total = $scope.totalRanks();
        //console.log("total:" + total + " Allowed:" + allowed);
        if (total >= allowed) return false;
        if ($scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks = $scope.currentLevel()) return false;
        $scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks++;
        $scope.totalSkillPoints();
    };
    $scope.skillDecrease = function (skill) {
        // var allowed =  ( + $scope.getAttribMod("int"))*$scope.character.level;
        if($scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks === 0)return false;
        //Actually needs to be set to the total skill ranks of previous levels || 0
        //if($scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks === ($scope.characterTotalSkillRanks(skill) > 0)?$scope.characterTotalSkillRanks(skill):0) return false;
        var total = 0;
        for (var x in $scope.character.levels[$scope.currentLevel()].skillRanks) total += x.ranks;
        if (total <= 0) return false;
        $scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks--;
        $scope.totalSkillPoints();
    };
    $scope.getSkillRank = function(skill){
        // console.log(skill);
        return ($scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks)?$scope.character.levels[$scope.currentLevel()].skillRanks[skill].ranks:0;
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
            if ($scope.character.levels[$scope.currentLevel()].selectedClass !== null) {
                total += $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillRanksPerLvl
                    + $scope.getAttribMod("int");
            }
        }
        return total ;
    };
    $scope.totalRanks = function () {
        var total = 0;
        for (var x in $scope.skillList) total += $scope.character.levels[$scope.currentLevel()].skillRanks[x].ranks;
        return total;
    };
    $scope.availSkillPoints = function () {
        console.log($scope.totalSkillPoints() - $scope.totalRanks());
        var pts = $scope.totalSkillPoints() - $scope.totalRanks();
        return (pts > 0) ? pts : 0;
    };

});
