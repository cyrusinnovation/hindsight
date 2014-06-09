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

  describe("with standardized date", function(){
    beforeEach(function(){
      this.clock = sinon.useFakeTimers(0, "Date");
    });

    afterEach(function(){
      this.clock.restore();
    });

    it('should set the first alarm when the timer is started', function () {
      RetrospectiveCtrl.startTimer();

      expect(scope.firstAlarm).toBeDefined();
      expect(scope.firstAlarm.getTime()).toBe(30*60*1000);
    });

    it('should update scope message with the time', function () {
      RetrospectiveCtrl.startTimer();
      scope.updateTime();
      expect(scope.message).toBe("30 minutes and 00 seconds");

      this.clock.tick(1);
      scope.updateTime();
      expect(scope.message).toBe("29 minutes and 59 seconds");
    });

    it('should stop the timer when paused', function(){
      RetrospectiveCtrl.startTimer();
      this.clock.tick(1);
      scope.updateTime();
      expect(scope.message).toBe("29 minutes and 59 seconds");

      RetrospectiveCtrl.pauseTimer();
      this.clock.tick(30000);
      expect(scope.message).toBe("29 minutes and 59 seconds");
    });
  });

  describe("#clickTimer", function(){
    it('should call pause when already started', function(){
      var spy = sinon.spy(RetrospectiveCtrl, "pauseTimer");

      scope.started = true;
      RetrospectiveCtrl.clickTimer();
      expect(spy.calledOnce).toBeTruthy();

      spy.restore();
    });

    it('should call start when currently paused', function(){
      var spy = sinon.spy(RetrospectiveCtrl, "startTimer");

      scope.started = false;
      RetrospectiveCtrl.clickTimer();
      expect(spy.calledOnce).toBeTruthy();

      spy.restore();
    });
  });

});
