'use strict';

hindsightApp.controller('MainCtrl', function ($scope, $location) {
  $scope.getClass = function (path) {
    if($location.path() == path) {
      return "active";
    } else {
      return "";
    }
  };

});
