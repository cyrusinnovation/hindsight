'use strict';

hindsightApp.controller('RetrospectivesCtrl', function ($scope, $filter, $http) {
  $scope.retros = [];
  $scope.newRetro = {name: '', date: ''};
  $scope.minDate = $filter('date')(new Date(), "yyyy-MM-dd");

  this.addRetro = function(){

    $http({
      method: 'POST',
      url: 'http://localhost:3000/retrospective',
      params: {
        label: $scope.newRetro.name,
        start: $scope.newRetro.date
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    $scope.retros.push($scope.newRetro);
    $scope.newRetro = {name: '', date: ''};
  };

});
