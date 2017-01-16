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
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            template: '<div ui-view class="fade-in-right-big smooth"></div>'
        })
  });
