describe('timer', function() {
  var element, $scope;
  beforeEach(module("hindsightApp"));

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<timer duration="30"></timer>');
    $compile(element)($rootScope);
  }));

  it('should show the number of minutes', function () {
    $scope.$digest();
    expect(element.html()).toContain("30 minutes");
  });

  it('should set started to true when the timer is started', function () {
    $scope.started = false;
    $scope.startTimer();

    expect($scope.started).toBe(true);
  });

});
