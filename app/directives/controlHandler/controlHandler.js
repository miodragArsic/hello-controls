'use strict';

angular.module('myApp.controlHandler', []).directive('controlHandler', controlHandler);

controlHandler.$inject = ['$compile'];

function controlHandler($compile) {

    var defaultTemplate = "<p> You Fail!</p>"


    var directive = {
        restrict: "E",
        link: linker,
        scope: {
            controlName: '=',
            value: '=',
            profile: '='
        }
    }
    return directive;

    /////////////////////////////////



    function getControl(controlName) {
    	var template = defaultTemplate;

    	if(controlName == 'label')
    		return template = "<label-control text-value = 'value', asset-profile = 'profile' > </label-control>"

    	if(controlName == 'toggle')
    		return template = "<toggle-control toggle-value = 'value', asset-profile = 'profile'> </label-control>"

    	if (controlName == 'multi-toggle') 
    		return template = "<multi-toggle-control multi-toggle-value = 'value' asset-profile = 'profile'> </multi-toggle-control>"

        return template;
    }

    function linker(scope, element, attrs) {

    	scope.$watch('controlName', function(newValue) {

                if (newValue) {
                    element.html(getControl(scope.controlName));
                    $compile(element.contents())(scope);
                }
            });

    }

}