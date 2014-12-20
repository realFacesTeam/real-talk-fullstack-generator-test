'use strict';

describe('Controller: 3DcanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('realTalkFullstackGeneratorTestApp'));

  var 3DcanvasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    3DcanvasCtrl = $controller('3DcanvasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
