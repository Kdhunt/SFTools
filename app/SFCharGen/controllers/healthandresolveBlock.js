SFCharGen.directive('charGenHealthAndResolveBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/healthandresolveBlock.html'
    }
});
SFCharGen.controller('SFCharGenHealthAndResolveBlockCtrl', function($scope) {
    $scope.getTotalHP = function(){
        var total = 0;
        //level 1 health
        if($scope.character.levels[0].selectedClass !== null && $scope.character.race !== null){
            total  += $scope.races.availableRaces[$scope.character.race].hp;
            total  += $scope.classes.availableClasses[$scope.character.levels[0].selectedClass].hp;
        }
        //subsequent levels
        if($scope.currentLevel() > 1){
            for(x in $scope.character.levels){
                if(x.classLevel === 1 ) continue;
                total += x.hp;
            }
        }
        return total;
    };
    $scope.getTotalSP = function(){
        var total = 0;
            for(x in $scope.character.levels){
                if($scope.character.levels[x].selectedClass !== null) {
                    total += $scope.classes.availableClasses[$scope.character.levels[x].selectedClass].sp;
                }
                total  += $scope.getAttribMod("con");
            }
        return total;
    };
    $scope.getTotalRP = function(){
        var total = 0;
        //half current level, min 1
        total += (($scope.currentLevel()/2) > 1)?($scope.currentLevel()/2):1;
        //key attrib mod
        var inc = 0;
       // if($scope.classes !== undefined && $scope.character.levels[0].selectedClass !== null){
        for(var k in $scope.classes.availableClasses[$scope.character.levels[0].selectedClass].keyAbility){
            var m = $scope.getAttribMod($scope.classes.availableClasses[$scope.character.levels[0].selectedClass].keyAbility[k]);
            inc = (m>inc)?m:inc;
        }//}
       total += inc;
        return total;
    };

});