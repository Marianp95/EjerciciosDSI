var module = angular.module('listApp', []);
var controller = module.controller('listController', initController);

function initController ($scope) {
    $scope.items=['first Item'];
    $scope.addItem = function(){
        if($scope.newItem){
            $scope.items.push($scope.newItem);
            $scope.newItem= undefined;
        }

    }
}