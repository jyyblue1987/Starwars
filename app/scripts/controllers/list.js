'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('ListCtrl', function ($scope, usSpinnerService) {
    var search_message = '<i>Searching...</i>';
    var hint_message ='Use the form to search for <br> "People" or "Movies"';

    $scope.message = search_message;

    
  });
