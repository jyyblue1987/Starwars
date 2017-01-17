'use strict';

/**
 * @ngdoc overview
 * @name starwarApp
 * @description
 * # starwarApp
 *
 * Main module of the application.
 */
angular
  .module('starwarApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angularSpinner',
    'ne.swapi'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'views/list.html'
        })
        .state('detail', {
            url: '/detail:item',
            templateUrl: 'views/detail.html'
        })
        .state('movie', {
            url: '/movie:item',
            templateUrl: 'views/movie.html'
        });
  })
  .controller('AppCtrl', function ($scope, $rootScope, swapi) {
    $rootScope.peoples = {};
    $rootScope.films = {};
    $rootScope.data_count = 0;

    $scope.findFilmPeople = function(callback) {
        if( $rootScope.data_count >= 2 )
            callback();

        $rootScope.data_count = 0;
        // find all people
        swapi.people.all()
            .then(function(peoples) {
                var results = peoples.results; 
                for(var i = 0; i < results.length; i++)
                {
                    $rootScope.peoples[results[i].url] = results[i];
                }
                $rootScope.data_count++;
                if( $rootScope.data_count >= 2 && callback != undefined )
                {
                    callback();
                }
            });

        // find all movies    
        swapi.films.all()
            .then(function(films) {
                var results = films.results; 
                for(var i = 0; i < results.length; i++)
                {
                    $rootScope.films[results[i].url] = results[i];
                }
                $rootScope.data_count++;
                if( $rootScope.data_count >= 2 && callback != undefined )
                {
                    callback();
                }
            });        
    }

    $scope.findFilmPeople();   
    
  });
