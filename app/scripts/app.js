'use strict';

var hindsightApp = angular.module('hindsightApp', ['ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute', 'config']);

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
    .when('/retrospective', {
      templateUrl: 'views/retrospective.html',
      controller: 'RetrospectiveCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});