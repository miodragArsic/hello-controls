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
	$scope.control = null;


	function getAsset(assetId){

		$http.get("http://att-controls-management.cloudapp.net/assets/" + assetId)
		.then(function(response){
			$scope.asset = response.data;
			getControls(assetId);
		})
		.catch(function(error){
			$log.log(error);
		})
	}

	function getControls(assetId){
		$http.get("http://att-controls-management.cloudapp.net/controls/asset/" + assetId)
		.then(function (response){
			$scope.assetControl = response.data;
			$scope.control = selectControl(response.data);
		})
		.catch(function (error){
			$log.log(error);
		})
	}

	getAsset($routeParams.assetId);

	function selectControl(controls){
		var minPriorityControl = controls[0];
		for (var i = 0; i < controls.length; i++) {
			
			if(minPriorityControl.schema.priority > controls[i].schema.priority){
				minPriorityControl = controls[i];
			}
		}
		return minPriorityControl;
	}

}]);