'use strict';

var crfControllers = angular.module('crfControllers', []);

crfControllers.controller('displayCRF', ['$scope', '$http', function($scope, $http){
  $http({method: 'GET', url: 'https://api.parse.com/1/classes/crf/3W8DkcbbWN', headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}})
  .success(function(data){
    $scope.crf = data;
  });
}]);