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

    $scope.findFilemPeople = function() {
        // find all people
        swapi.people.all()
            .then(function(peoples) {
                var results = peoples.results; 
                for(var i = 0; i < results.length; i++)
                {
                    $rootScope.peoples[results[i].url] = results[i];
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
            });        
    }

    $scope.findFilemPeople();   
    
  });
