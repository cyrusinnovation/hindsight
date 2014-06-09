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
      $scope: scope, $element: element, $attrs: attrs
    });
  }));

  it('should initialize a fake temporary retro', function () {
    expect(scope.retro.name).toBe("Team Retro 1");
  });

  describe('timer', function(){
    var scope, $compile;
    var element, timer;

    beforeEach(inject(function(_$rootScope_, _$compile_){
      scope = _$rootScope_;
      $compile = _$compile_;
    }));

    afterEach(function () {
      element = timer = scope = $compile = undefined;
    });

    describe('with a timer', function() {
      beforeEach(function () {
        var tpl =
          '<timer>' +
          '<div id="retro-time">{{message}}</div>' +
          '<button id="timer-control" ng-click="clickTimer()" class="btn btn-primary paused">Start Timer</button>' +
          '</timer>';
        element = angular.element(tpl);
        $compile(element)(scope);
        scope.$digest();
        timer = element.find('timer');
      });
      afterEach(function() {
        element.remove();
      });


      it('should set started to true when the timer is started', function () {
        scope.started = false;
        timer.scope().startTimer();

        expect(timer.scope().started).toBe(true);
      });


    });

  });

//  describe("with standardized date", function(){
//    beforeEach(function(){
//      this.clock = sinon.useFakeTimers(0, "Date");
//    });
//
//    afterEach(function(){
//      this.clock.restore();
//    });
//
//    describe("#startTimer", function(){
//      it('should set the first alarm when the timer is started', function () {
//        RetrospectiveCtrl.startTimer();
//
//        expect(scope.firstAlarm).toBeDefined();
//        expect(scope.firstAlarm.getTime()).toBe(30*60*1000);
//      });
//
//
//      it('should update scope message with the time', function () {
//        RetrospectiveCtrl.startTimer();
//        scope.updateTime();
//        expect(scope.message).toBe("30 minutes and 00 seconds");
//
//        this.clock.tick(1);
//        scope.updateTime();
//        expect(scope.message).toBe("29 minutes and 59 seconds");
//      });
//    });
//
//
//    describe("with a started timer", function(){
//      beforeEach(function(){
//        RetrospectiveCtrl.startTimer();
//      });
//
//      it('should stop the timer when paused', function(){
//        this.clock.tick(1);
//        scope.updateTime();
//        expect(scope.message).toBe("29 minutes and 59 seconds");
//
//        RetrospectiveCtrl.pauseTimer();
//        this.clock.tick(30000);
//        expect(scope.message).toBe("29 minutes and 59 seconds");
//      });
//
//      it('should set started to false when the timer is paused', function () {
//        RetrospectiveCtrl.pauseTimer();
//
//        expect(scope.started).toBeFalsy();
//      });
//
//      it('pause timer should set remaining timer duration', function () {
//        this.clock.tick(5);
//        RetrospectiveCtrl.pauseTimer();
//
//        expect(scope.timerDurationMs).toBe((30*60*1000) - 5);
//      });
//    });
//
//  });
//
//  describe("#clickTimer", function(){
//
//    it('should call start when currently paused', function(){
//      var spy = sinon.spy(RetrospectiveCtrl, "startTimer");
//
//      scope.started = false;
//      RetrospectiveCtrl.clickTimer();
//      expect(spy.calledOnce).toBeTruthy();
//
//      spy.restore();
//    });
//
//
//    it('should call pause when already started', function(){
//      var spy = sinon.spy(RetrospectiveCtrl, "pauseTimer");
//
//      scope.started = true;
//      RetrospectiveCtrl.clickTimer();
//      expect(spy.calledOnce).toBeTruthy();
//
//      spy.restore();
//    });
//  });

});
