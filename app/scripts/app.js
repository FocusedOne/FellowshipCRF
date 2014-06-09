/*global app:true */
'use strict';

var app = angular.module('fellowshipCrfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'crfControllers'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/fullForm.html',
        controller: 'FormCtrl'
      })
      .when('/output', {
        templateUrl: 'views/formOutput.html',
        controller: 'displayCRF'
      })
      .otherwise({
        redirectTo: '/'
      });
  });