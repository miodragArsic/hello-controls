'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http','$scope','$log', function($http, $scope, $log) {

	$scope.controls = null;
	$scope.assets = null;

	function getAssets(){
		 $http.get("http://192.168.0.104:8090/nancy/assets")
			.then(function(response){
				$scope.assets = response.data;
			})
			.catch(function(error){
				$log.log(error);
			})
	}

	function getControlls(){

		 $http.get("http://192.168.0.104:8090/nancy/controls").then(function(response) {
                    $scope.controls = response.data;
                })
		.catch(function(error){
			$log.log(error);
		})
	}

	getAssets();
	getControlls();

}]);