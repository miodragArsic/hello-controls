'use strict';

angular.module('myApp.multiToggleControl', []).directive('multiToggleControl', multiToggleControl);

multiToggleControl.$inject = [];

function multiToggleControl() {

    var directive = {
        restrict: "E",
        link: linker,
        templateUrl: "directives/controlls/multiToggleControl/view.html",
        scope: {
            multiToggleValue: '=',
            assetProfile: '='
        }
    }
    return directive;

    /////////////////////////////////

    function linker(scope, element, attrs) {
        scope.listElements = [];

        if (scope.assetProfile.enum){
            scope.listElements = scope.assetProfile.enum;
        }else if (scope.assetProfile.labels){
            for (var i = 0; i < scope.assetProfile.labels.length; i++) {
                scope.listElements.push(scope.assetProfile.labels[i].name);
            };
        }

        scope.$watch('multiToggleValue', function(newValue) {

                scope.multiToggleValue = newValue;
            });

    }

}