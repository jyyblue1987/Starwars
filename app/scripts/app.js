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
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'views/list.html'
        })
        .state('detail', {
            url: '/detail',
            templateUrl: 'views/detail.html'
        });
  });
