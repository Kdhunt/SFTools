SFCharGen.directive('charGenAttributesBlock', function() {
    return {
        templateUrl : "SFCharGen/components/attribBlock.html"
    }
});
SFCharGen.controller('SFCharGenAttribBlockCtrl', function($scope) {


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
    $scope.setBaseAttribVals = function () {
        $scope.character.attributes.str.value += $scope.strScore();
        $scope.character.attributes.dex.value += $scope.dexScore();
        $scope.character.attributes.con.value += $scope.conScore();
        $scope.character.attributes.int.value += $scope.intScore();
        $scope.character.attributes.wis.value += $scope.wisScore();
        $scope.character.attributes.cha.value += $scope.chaScore();
    };
});