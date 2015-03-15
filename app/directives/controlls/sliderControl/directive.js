'use strict';

angular.module('myApp.sliderControl', []).directive('sliderControl', sliderControl);

sliderControl.$inject = ['$compile'];

function sliderControl($compile) {

    var directive = {
        restrict: "E",
        link: linker,
        scope: {
            sliderValue: '=',
            assetProfile: '='
        }
    }
    return directive;

    /////////////////////////////////



    function linker(scope, element, attrs) {


        var template = '<md-slider md-discrete ng-model = "sliderValue" min = "' + scope.assetProfile.minimum + '" max = "' + scope.assetProfile.maximum + ' step = "' + scope.assetProfile.step + ' > </md-slider>';
        element.html(template);
        $compile(element.contents())(scope);
        scope.$watch('sliderValue', function(newValue) {

            scope.sliderValue = newValue;
        });

    }

}