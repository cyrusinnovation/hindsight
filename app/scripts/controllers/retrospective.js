'use strict';

hindsightApp.controller('RetrospectiveCtrl', function ($scope) {
  $scope.retro = {name: 'Team Retro 1', date: '2014-06-21'};

});



hindsightApp.directive("timer", function() {

  var linkFunction = function(scope, element, attributes) {

    scope.startTime = {};
    scope.message = "30 minutes and 00 seconds";
    scope.started = false;
    scope.timerDurationMs = 0;
    var defaultTimerDurationMs = 30*60*1000;

    scope.updateTime = function() {
      var duration = scope.currentTimerDuration();
      var seconds = parseInt((duration/1000)%60);
      var minutes = parseInt((duration/(1000*60))%60);

      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      scope.message = minutes + " minutes and " + seconds + " seconds";
    };

    scope.currentTimerDuration = function() {
      if(scope.firstAlarm){
        return scope.firstAlarm - new Date();
      }
    };

    scope.startTimer = function() {
      scope.startTime = new Date();
      scope.firstAlarm = scope.startTime;
      scope.firstAlarm.setTime(scope.startTime.getTime() + defaultTimerDurationMs);

      scope.timerIntervalId = setInterval(function() {
        scope.$apply(function() {
          scope.updateTime();
        });
      }, 100);

      scope.started = true;
    };

    scope.clickTimer = function() {
      if(scope.started){
        scope.pauseTimer();
      }else{
        scope.startTimer();
      }
    };

    scope.pauseTimer = function() {
      scope.timerDurationMs = scope.currentTimerDuration();
      clearInterval(scope.timerIntervalId);
      scope.started = false;
    };

    var timerControl = element.find('#timer-control');
    $(timerControl).on("click", function() {
      if(timerControl.hasClass("paused")){
        timerControl.text("Pause Timer");
        timerControl.removeClass("paused");
        timerControl.addClass("playing");
      } else if(timerControl.hasClass("playing")){
        timerControl.text("Start Timer");
        timerControl.removeClass("playing");
        timerControl.addClass("paused");
      }

    });
  };

  return {
    restrict: "E",
    templateUrl: 'templates/timer.html',
    link: linkFunction
  };
});