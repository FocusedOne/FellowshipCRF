/*global app:true */
'use strict';

var app = angular.module('fellowshipCrfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/fullForm.html',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
