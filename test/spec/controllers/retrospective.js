'use strict';

describe('Controller: RetrospectiveCtrl', function () {

  // load the controller's module
  beforeEach(module('hindsightApp'));

  var RetrospectiveCtrl, scope;

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

});
