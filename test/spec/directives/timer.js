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

  it('should save the number of minutes', function () {
    $scope.$digest();
    expect(element.isolateScope().duration).toBe(30);
  });

  it('should set started to true when the timer is started', function () {
    element.isolateScope().started = false;
    element.isolateScope().startTimer();
    expect(element.isolateScope().started).toBe(true);
  });

});
