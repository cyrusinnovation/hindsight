'use strict';

hindsightApp.controller('RetrospectivesCtrl', function ($scope, $filter, $http) {
  $http.get('http://localhost:3000/retrospective')
    .then(function(result){
       $scope.retros = result.data;
    });
  $scope.newRetro = {label: '', start: ''};
  $scope.minDate = $filter('date')(new Date(), "yyyy-MM-dd");

  this.addRetro = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:3000/retrospective',
      params: {
        label: $scope.newRetro.label,
        start: $scope.newRetro.start
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).
      success(function() {
      $scope.retros.push($scope.newRetro);
      $scope.newRetro = {label: '', start: ''};
    }).
      error(function() {
      alert("Sorry there was an error :(");
    });
  };

});
