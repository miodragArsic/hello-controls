'use strict';

angular.module('myApp.toggleControl', []).directive('toggleControl', toggleControl);

toggleControl.$inject = [];

function toggleControl() {

    var directive = {
        restrict: "E",
        link: linker,
        templateUrl: "directives/controlls/toggleControl/view.html",
        scope: {
            toggleValue: '=',
            assetProfile: '='
        }
    }
    return directive;

    /////////////////////////////////

    function linker(scope, element, attrs) {

        scope.$watch('toggleValue', function(newValue) {

                scope.toggleValue = newValue;
            });

    }

}