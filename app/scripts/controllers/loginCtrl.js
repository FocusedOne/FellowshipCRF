'use strict';

app.controller('loginCtrl', function($scope, Users){

  $scope.user = {
    username: '',
    password: ''
  };

  $scope.signupUser = function(){
    console.log('signing up user ' + $scope.user.username);
    Users.create($scope.user);
  };
  $scope.loginUser = function(){
    Users.login($scope.user)
    .success(function(data){
      console.log(data.username + ' logged in! sesh id is ' + data.sessionToken);
    });
  };

});
