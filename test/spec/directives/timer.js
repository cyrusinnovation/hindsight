describe('timer', function() {
  var element, $scope, timerScope;
  beforeEach(module("hindsightApp"));

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<timer duration="30"></timer>');
    $compile(element)($rootScope);
    timerScope = element.isolateScope();
  }));

  it('should show the number of minutes', function () {
    $scope.$digest();
    expect(element.html()).toContain("30 minutes");
  });

  it('should save the number of minutes', function () {
    $scope.$digest();
    expect(timerScope.duration).toBe(30);
  });

  it('should set started to true when the timer is started', function () {
    timerScope.started = false;
    timerScope.startTimer();
    expect(timerScope.started).toBe(true);
  });

  describe("with standardized date", function(){
    beforeEach(function(){
      this.clock = sinon.useFakeTimers(0, "Date");
    });

    afterEach(function(){
      this.clock.restore();
    });

    describe("#startTimer", function(){
      it('should set the first alarm when the timer is started', function () {
        timerScope.startTimer();

        expect(timerScope.firstAlarm).toBeDefined();
        expect(timerScope.firstAlarm.getTime()).toBe(30*60*1000);
      });


      it('should update scope timeDisplay with the time', function () {
        expect(timerScope.timeDisplay).toBe("30 minutes");

        timerScope.startTimer();
        timerScope.updateTime();
        expect(timerScope.timeDisplay).toBe("30 minutes and 00 seconds");

        this.clock.tick(1);
        timerScope.updateTime();
        expect(timerScope.timeDisplay).toBe("29 minutes and 59 seconds");
      });
    });


    describe("with a started timer", function(){
      beforeEach(function(){
        timerScope.startTimer();
      });

      it('should stop the timer when paused', function(){
        this.clock.tick(1);
        timerScope.updateTime();
        expect(timerScope.timeDisplay).toBe("29 minutes and 59 seconds");

        timerScope.pauseTimer();
        this.clock.tick(30000);
        expect(timerScope.timeDisplay).toBe("29 minutes and 59 seconds");
      });

      it('should set started to false when the timer is paused', function () {
        timerScope.pauseTimer();

        expect(timerScope.started).toBeFalsy();
      });

      it('pause timer should set remaining timer duration', function () {
        this.clock.tick(5);
        timerScope.pauseTimer();

        expect(timerScope.timerDurationMs).toBe((30*60*1000) - 5);
      });
    });

  });

  describe("#clickTimer", function(){

    it('should call start when currently paused', function(){
      var spy = sinon.spy(timerScope, "startTimer");

      timerScope.started = false;
      timerScope.clickTimer();
      expect(spy.calledOnce).toBeTruthy();

      spy.restore();
    });

    it('should call pause when already started', function(){
      var spy = sinon.spy(timerScope, "pauseTimer");

      timerScope.started = true;
      timerScope.clickTimer();
      expect(spy.calledOnce).toBeTruthy();

      spy.restore();
    });
  });

});
