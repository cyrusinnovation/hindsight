'use strict';

var hindsightApp = angular.module('hindsightApp', ['ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute']);

hindsightApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
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
