"use strict";var hindsightApp=angular.module("hindsightApp",["ngCookies","ngResource","ngSanitize","ngRoute"]);hindsightApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/retrospectives",{templateUrl:"views/retrospectives.html",controller:"RetrospectivesCtrl"}).when("/retrospective",{templateUrl:"views/retrospective.html",controller:"RetrospectiveCtrl"}).otherwise({redirectTo:"/"})}]),hindsightApp.controller("MainCtrl",["$scope","$location",function(a,b){a.getClass=function(a){return b.path()==a?"active":""}}]),hindsightApp.controller("RetrospectivesCtrl",["$scope","$filter",function(a,b){a.retros=[],a.newRetro={name:"",date:""},a.minDate=b("date")(new Date,"yyyy-MM-dd"),this.addRetro=function(){a.retros.push(a.newRetro),a.newRetro={name:"",date:""}}}]),hindsightApp.controller("RetrospectiveCtrl",["$scope",function(a){a.retro={name:"Team Retrospective",date:"2014-06-21"}}]),hindsightApp.controller("ActivitiesCtrl",["$scope",function(a){a.activities=[{name:"Check In",duration:5,active:!1},{name:"Topic Generation",duration:15,active:!1},{name:"Topic Selection",duration:5,active:!1},{name:"Topic Discussion",duration:15,active:!1},{name:"Action Planning",duration:20,active:!1}],a.setActiveActivity=function(b){for(var c=0;c<a.activities.length;c++)a.activities[c].active=!1;a.activities[b].active=!0}}]),hindsightApp.directive("timer",function(){var a=function(a){a.started=!1;var b=60*parseInt(a.duration)*1e3;a.timerDurationMs=b,a.timeDisplay=b/60/1e3+" minutes",a.stopTimer=function(){clearInterval(a.timerIntervalId),a.started=!1},a.buttonText=function(){return a.started?"Pause Timer":"Start Timer"},a.updateTime=function(){var b=a.currentTimerDuration();if(0>=b)a.stopTimer(),a.onEnd(),alert("Time is up!");else{var c=parseInt(b/1e3%60),d=parseInt(b/6e4%60);d=10>d?"0"+d:d,c=10>c?"0"+c:c,a.timeDisplay=d+" minutes and "+c+" seconds"}},a.currentTimerDuration=function(){return a.firstAlarm?a.firstAlarm-new Date:void 0},a.startTimer=function(){a.startTime=new Date,a.firstAlarm=a.startTime,a.firstAlarm.setTime(a.startTime.getTime()+a.timerDurationMs),a.timerIntervalId=setInterval(function(){a.$apply(function(){a.updateTime()})},100),a.started=!0},a.clickTimer=function(){a.started?(a.pauseTimer(),a.onPause()):(a.startTimer(),a.onPlay())},a.pauseTimer=function(){a.timerDurationMs=a.currentTimerDuration(),a.stopTimer()}};return{restrict:"E",scope:{duration:"=",activity:"=",onPlay:"&onPlay",onPause:"&onPause",onEnd:"&onEnd"},template:'<div id="activity-name">{{activity}}</div><div id="retro-time">{{timeDisplay}}</div><button id="timer-control" ng-click="clickTimer()" ng-class="" class="btn btn-primary">{{buttonText()}}</button>',link:a}});