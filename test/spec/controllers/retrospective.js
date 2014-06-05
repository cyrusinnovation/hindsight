'use strict';

describe('Controller: RetrospectiveCtrl', function () {

  // load the controller's module
  beforeEach(module('hindsightApp'));

  var RetrospectiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetrospectiveCtrl = $controller('RetrospectiveCtrl', {
      $scope: scope
    });
  }));

  it('should initialize a fake temporary retro', function () {
    expect(scope.retro.name).toBe("Team Retro 1");
  });

  it('should set the first alarm when the timer is started', function () {
    this.clock = sinon.useFakeTimers(0, "Date");

    RetrospectiveCtrl.startTimer();

    expect(scope.firstAlarm).toBeDefined();
    expect(scope.firstAlarm.getTime()).toBe(30*60*1000);

    this.clock.restore();
  });

  it('should update scope message with the time', function () {
    this.clock = sinon.useFakeTimers(0, "Date");
    RetrospectiveCtrl.startTimer();
    scope.updateTime();
    expect(scope.message).toBe("30 minutes and 00 seconds");

    this.clock.tick(1);
    scope.updateTime();
    expect(scope.message).toBe("29 minutes and 59 seconds");

    this.clock.restore();
  });
});
