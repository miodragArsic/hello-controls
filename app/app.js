'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.controlHandler',
  'myApp.labelControl',
  'myApp.toggleControl',
  'myApp.multiToggleControl',
  'ui.select',
  'jsonFormatter'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
