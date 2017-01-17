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
	$scope.search_mode = 'People';
	// search_mode == 'People' ? 'e.g. Chewbacca, Yoda, Boba Fett : 'e.g. Empire Strikes Back, The Force Awakens'
    $scope.item_list = [];

	$scope.onSearch = function() {		
		$scope.item_list = [];
	    $scope.loading = true;
	    var url = '';

	    if( $scope.search_mode == 'People' )
			url = 'http://swapi.co/api/people/?search='+ $scope.search;
		else
			url = 'http://swapi.co/api/films/?search='+ $scope.search;

	    swapi.get(url)
		  .then(function(list) {
		  	$scope.loading = false;
		    $scope.item_list = list.results;
		  });	
	}  

	$scope.detail = function(item) {
		if( $scope.search_mode == 'People' )
			$state.go('detail', { item: JSON.stringify(item) });
		else
			$state.go('movie', { item: JSON.stringify(item) });

	}

	$scope.$watch('search_mode', function(newValue, oldValue) {
        if( newValue == oldValue )
            return;

        $scope.item_list = [];
    });

	
  });
