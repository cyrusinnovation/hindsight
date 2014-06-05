'use strict';

hindsightApp.controller('RetrospectivesCtrl', function ($scope, $filter) {
    $scope.retros = [];
    $scope.newRetro = {name: '', date: ''};
    $scope.minDate = $filter('date')(new Date(), "yyyy-MM-dd");

    this.addRetro = function(){
      $scope.retros.push($scope.newRetro);
      $scope.newRetro = {name: '', date: ''};
    };

  });
