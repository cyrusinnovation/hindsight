'use strict';

hindsightApp.controller('RetrospectivesCtrl', function ($scope, $filter, $http, ENV) {
  $http.get(ENV.apiEndpoint + '/retrospective')
    .then(function(result){
       $scope.retros = result.data;
    });
  $scope.newRetro = {label: '', start: ''};
  $scope.minDate = $filter('date')(new Date(), "yyyy-MM-dd");

  this.addRetro = function(){
    $http({
      method: 'POST',
      url: ENV.apiEndpoint + '/retrospective',
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
