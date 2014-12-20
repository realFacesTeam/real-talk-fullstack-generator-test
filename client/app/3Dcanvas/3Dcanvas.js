'use strict';

angular.module('realTalkFullstackGeneratorTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('3Dcanvas', {
        url: '/3Dcanvas',
        templateUrl: 'app/3Dcanvas/3Dcanvas.html',
        controller: '3DcanvasCtrl'
      });
  });