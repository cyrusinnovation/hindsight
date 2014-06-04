'use strict';

angular.module('hindsightApp')
  .controller('RetrospectivesCtrl', function ($scope) {
    $scope.retros = [];
    $scope.newRetro = {name: '', date: ''};

    this.addRetro = function(){
      $scope.retros.push($scope.newRetro);
      $scope.newRetro = {name: '', date: ''};
    };

  });
