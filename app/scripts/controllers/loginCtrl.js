'use strict';

app.controller('loginCtrl', function($scope, $location, $routeParams, Users){
  $scope.currentUser = {};
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.signupUser = function(){
    console.log('signing up user ' + $scope.user.username);
    Users.create($scope.user)
    .success(function(data){
      console.log($scope.user.username + ' created! sesh id is ' + data.sessionToken);
      $location.path('/session/'+ data.sessionToken);
    });
  };
  $scope.loginUser = function(){
    Users.login($scope.user)
    .success(function(data){
      console.log(data.username + ' logged in! sesh id is ' + data.sessionToken);
      $location.path('/session/' + data.sessionToken);
    });
  };

  $scope.getUser = function(){
    Users.getUser($routeParams.sessionId)
    .success(function(data){
      if (!data.error){
        console.log('this session is TOTALLY VALID');
        $scope.currentUser = data;
      }
      else{
        console.log('Session Expired, please login again.');
        $location.path('/login');
      }
    });
  };

  $scope.init = function(){
    if ($routeParams.sessionId){
      $scope.getUser();
    }
  };

  $scope.init();
});
