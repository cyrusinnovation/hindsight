'use strict';

angular.module('hindsightApp')
  .controller('RetrospectivesCtrl', function ($scope, $filter) {
    $scope.retros = [];
    $scope.newRetro = {name: '', date: ''};
    var date = new Date();
    $scope.minDate = $filter('date')(date, "yyyy-MM-dd");


    this.addRetro = function(){
      $scope.retros.push($scope.newRetro);
      $scope.newRetro = {name: '', date: ''};
    };

  });
