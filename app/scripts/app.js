'use strict';

angular
  .module('hindsightApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/retrospectives', {
        templateUrl: 'views/retrospectives.html',
        controller: 'RetrospectivesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
