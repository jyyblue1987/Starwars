'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('DetailCtrl', function ($scope, $rootScope, $state, $stateParams, swapi) {
    var item = $stateParams.item; //getting fooVal
    $scope.detail = JSON.parse(item);

    $scope.findFilmPeople(function() {
        var films = $scope.detail.films;
        $scope.movies = [];
        for(var i = 0; i < films.length; i++ )
        {   
            $scope.movies.push({url: films[i], title: $rootScope.films[films[i]].title});
        }
    });
    

    $scope.gotoMovie = function(item) {
        swapi.get(item.url)
        .then(function(movie) {
          $state.go('movie', { item: JSON.stringify(movie) });
        });
    }
  });
