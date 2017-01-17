'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('MovieCtrl', function ($scope, $rootScope, $state, $stateParams, swapi) {
    var item = $stateParams.item; //getting fooVal
    $scope.detail = JSON.parse(item);
    $scope.crawls = $scope.detail.opening_crawl.replace(/\r?\n/g,'<br/>');

    $scope.findFilmPeople(function() {
        var peoples = $scope.detail.characters;
        $scope.peoples = [];
        for(var i = 0; i < peoples.length; i++ )
        {   
            $scope.peoples.push({url: peoples[i], name: $rootScope.peoples[peoples[i]].name});
        }
    });
    

    $scope.gotoPeople = function(item) {
        swapi.get(item.url)
        .then(function(people) {
          $state.go('detail', { item: JSON.stringify(people) });
        });
    }
  });
