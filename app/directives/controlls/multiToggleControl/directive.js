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

        scope.$watch('multiToggleValue', function(newValue) {

                scope.multiToggleValue = newValue;
            });

    }

}