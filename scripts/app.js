'use strict';

/**
 * @ngdoc overview
 * @name atlasAngularTest
 * @description
 * # atlasAngularTest
 *
 * Main module of the application.
 */
angular
  .module('atlasAngularTest', [
    'templatescache',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:whatev*', {
        templateUrl: 'patterns/patterns.html',
        controller: 'PatternsCtrl',
        controllerAs: 'app'
      })
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
