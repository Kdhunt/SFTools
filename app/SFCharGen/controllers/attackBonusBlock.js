SFCharGen.directive('charGenAttackBonusBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/attackBonusBlock.html'
    }
});

SFCharGen.controller('SFCharGenAttackBonusBlockCtrl', function($scope) {
    $scope.getTotalMeleeBonus = function(){
        var total = 0;
        return total;
    };
    $scope.getTotalRangedBonus = function(){
        var total = 0;
        return total;
    };
    $scope.getTotalThrownBonus = function(){
        var total = 0;
        return total;
    };
});