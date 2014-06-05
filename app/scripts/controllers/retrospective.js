'use strict';

hindsightApp.controller('RetrospectiveCtrl', function ($scope) {
  $scope.retro = {name: 'Team Retro 1', date: '2014-06-21'};
  $scope.startTime = {};
  $scope.firstAlarm = {};

  this.updateTime = function() {
    var message = document.getElementById('retro-time');
    var duration = $scope.firstAlarm - new Date();
    var seconds = parseInt((duration/1000)%60);
    var minutes = parseInt((duration/(1000*60))%60);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    message.innerHTML = minutes + " minutes and " + seconds + " seconds";
  };

  this.startTimer = function() {
    $scope.startTime = new Date();
    $scope.firstAlarm = $scope.startTime;
    $scope.firstAlarm.setMinutes($scope.startTime.getMinutes() + 30);

    setInterval(this.updateTime, 100);
  };

});



hindsightApp.directive("timer", function() {
  var linkFunction = function(scope, element, attributes) {
    var timerControl = element.find('#timer-control');
    $(timerControl).on("click", function() {
      if(timerControl.hasClass("paused")){
        timerControl.text("Pause Timer");
        timerControl.removeClass("paused");
        timerControl.addClass("playing");
      } else if(hasClass("playing")){
        timerControl.text("Start Timer");
        timerControl.removeClass("playing");
        timerControl.addClass("paused");
      }

    });
  };

  return {
    restrict: "E",
    link: linkFunction
  };
});