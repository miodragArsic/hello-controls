'use strict';

angular.module('myApp.labelControl', []).directive('labelControl', labelControl);

labelControl.$inject = [];

function labelControl() {

    var directive = {
        restrict: "E",
        link: linker,
        templateUrl: "directives/controlls/labelControl/view.html",
        scope: {
            textValue: '=',
            assetProfile: '='
        }
    }
    return directive;

    /////////////////////////////////

    function linker(scope, element, attrs) {

        scope.$watch('textValue', function(newValue) {

                scope.textValue = newValue;
            });

    }

}