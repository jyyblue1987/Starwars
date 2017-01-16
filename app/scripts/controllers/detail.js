'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('DetailCtrl', function ($scope, $rootScope, $stateParams) {
    var item = $stateParams.item; //getting fooVal
    $scope.detail = JSON.parse(item);

    var films = $scope.detail.films;
    $scope.movies = [];
    for(var i = 0; i < films.length; i++ )
    {    	
    	$scope.movies.push({url: films[i], title: $rootScope.films[films[i]].title});
    }
  });
