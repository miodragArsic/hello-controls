'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/asset/:assetId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

}])

.controller('View2Ctrl', ['$scope','$http','$log','$routeParams', function($scope, $http, $log, $routeParams) {

	$scope.asset = null;
	$scope.assetControl = null;


	function getAsset(assetId){

		$http.get("http://192.168.0.104:8090/nancy/assets/" + assetId)
		.then(function(response){
			$scope.asset = response.data;
			postProfile($scope.asset.profile);
		})
		.catch(function(error){
			$log.log(error);
		})
	}

	function postProfile(assetProfile){
		$http.post("http://192.168.0.104:8090/nancy/controls/profile", assetProfile)
		.then(function (response){
			$scope.assetControl = response.data;
		})
		.catch(function (error){
			$log.log(error);
		})
	}

	getAsset($routeParams.assetId);

	

}]);