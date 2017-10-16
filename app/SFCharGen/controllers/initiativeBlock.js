SFCharGen.directive('charGenInitiativeBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/initiativeBlock.html'
    }
});
SFCharGen.controller('SFCharGenInitiativeBlockCtrl', function($scope) {
    $scope.calcInitiativeTotal = function(){
        var total = 0;
        total += $scope.getAttribMod("dex");
        total += $scope.getMiscInitMods();
        return total;
    };
    $scope.getMiscInitMods = function(){
        var total = 0;
        for(var x in $scope.character.levels){
            if(x.feats !== null) {
                for (var f in x.feats) {
                    total += f.initMod;
                }
            }
        }
        return total;
    };
});