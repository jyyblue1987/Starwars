'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('ListCtrl', function ($scope, $state, usSpinnerService,  swapi) {
    $scope.search_message = '<i>Searching...</i>';
    $scope.hint_message ='Use the form to search for <br> "People" or "Movies"';

	$scope.search = '';

    $scope.item_list = [];

	$scope.onSearch = function() {		
		$scope.item_list = [];
	    $scope.loading = true;
	    var url = 'http://swapi.co/api/people/?search='+ $scope.search;
	    swapi.get(url)
		  .then(function(peoples) {
		  	$scope.loading = false;
		    $scope.item_list = peoples.results;
		  });	
	}  

	$scope.detail = function(item) {
		$state.go('detail', { item: JSON.stringify(item) });
	}

	
  });
