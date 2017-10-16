SFCharGen.directive('charGenSavingThrowsBlock', function() {
    return {
        templateUrl : 'SFCharGen/components/savingthrowsBlock.html'
    }
});

SFCharGen.controller('SFCharGenSavingThrowsBlockCtrl', function($scope) {
    $scope.getTotalFortitudeSave = function(){
        var total = 0;
        return total;
    };
    $scope.getTotalReflexSave = function(){
        var total = 0;
        return total;
    };
    $scope.getTotalWillSave = function(){
        var total = 0;
        return total;
    };
});