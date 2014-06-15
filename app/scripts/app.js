/*global app: true */
'use strict';

var app = angular.module('fellowshipCrfApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/fullForm.html',
      controller: 'inputCtrl'
    })
    .when('/output/:id', {
      templateUrl: 'views/formOutput.html',
      controller: 'outputCtrl'
    })
    .when('/all', {
      templateUrl: 'views/formList.html',
      controller: 'listCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'views/fullForm.html',
      controller: 'inputCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
