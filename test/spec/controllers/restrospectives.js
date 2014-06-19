'use strict';

describe('Controller: RetrospectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('hindsightApp'));

  var RetrospectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetrospectivesCtrl = $controller('RetrospectivesCtrl', {
      $scope: scope
    });
  }));

  it('should initialize a list of retros from the server', function () {
    // COMING SOON
    //expect(scope.retros.length).toBe(0);
  });

  it('should initialize a blank new retro', function () {
    expect(scope.newRetro.label).toBe('');
  });

  it('should set the min date for the datepicker', function () {
    var currentDate = new Date().toDateString();
    var scopeDate = new Date(scope.minDate + " 12:00").toDateString();
    expect(scopeDate).toEqual(currentDate);
  });
});
