'use strict';

hindsightApp.controller('RetrospectiveCtrl', function ($scope) {
  $scope.retro = {name: 'Team Retrospective', date: '2014-06-21'};
});

hindsightApp.controller('ActivitiesCtrl', function($scope){
  $scope.activities = [{name:'Check In', duration:1, active:false}, {name:'Gather Data', duration:20, active:false},
                     {name:'Gain Insights', duration: 20, active:false}, {name:'Action Plan', duration:15, active:false}];

  $scope.setActiveActivity = function(index) {
    for(var i=0; i < $scope.activities.length; i++){
      $scope.activities[i].active = false;
    }

    $scope.activities[index].active = true;
  }
});

hindsightApp.directive("timer", function() {
  var linkFunction = function(scope, element, attributes) {
    scope.started = false;
    var defaultTimerDurationMs = parseInt(scope.duration)*60*1000;
    scope.timerDurationMs = defaultTimerDurationMs;
    scope.timeDisplay = (defaultTimerDurationMs/60/1000) + " minutes";

    scope.stopTimer = function(){
      clearInterval(scope.timerIntervalId);
      scope.started = false;
    };

    scope.buttonText = function(){
        return scope.started ? "Pause Timer" : "Start Timer";
    };

    scope.updateTime = function() {
      var duration = scope.currentTimerDuration();
      if(duration <= 0) {
        scope.stopTimer();
        scope.onEnd();
        alert("Time is up!");
      } else {
        var seconds = parseInt((duration/1000)%60);
        var minutes = parseInt((duration/(1000*60))%60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        scope.timeDisplay = minutes + " minutes and " + seconds + " seconds";
      }
    };

    scope.currentTimerDuration = function() {
      if(scope.firstAlarm){
        return scope.firstAlarm - new Date();
      }
    };

    scope.startTimer = function() {
      scope.startTime = new Date();
      scope.firstAlarm = scope.startTime;
      scope.firstAlarm.setTime(scope.startTime.getTime() + scope.timerDurationMs);

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
        scope.onPause();

      }else{
        scope.startTimer();
        scope.onPlay();
      }
    };

    scope.pauseTimer = function() {
      scope.timerDurationMs = scope.currentTimerDuration();
      scope.stopTimer();
    };

  };

  return {
    restrict: "E",
    scope: {
      duration: '=',
      activity: '=',
      onPlay: '&onPlay',
      onPause: '&onPause',
      onEnd: '&onEnd'
    },
    template: '<div id="activity-name">{{activity}}</div>' +
              '<div id="retro-time">{{timeDisplay}}</div>' +
              '<button id="timer-control" ng-click="clickTimer()" ng-class="" class="btn btn-primary">{{buttonText()}}</button>',
    link: linkFunction
  };
});
