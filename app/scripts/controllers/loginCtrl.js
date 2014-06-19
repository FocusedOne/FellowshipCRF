'use strict';

app.controller('loginCtrl', function($scope, AuthService, Session){
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.loggedIn = Session.userIsAuthenticated;
  console.log('loggedIn is ' + $scope.loggedIn);
  $scope.login = function(){
    AuthService.login($scope.credentials)
    .success(function(data){
      console.log('logged as user: ' + data.username);
      console.log('sessionToken: '+ data.sessionToken);
      Session.create(data.username, data.sessionToken);
      console.log('Authenticated? ' + Session.userIsAuthenticated);
    })
    .error(function(data){
      console.log('there was a problem and you are not logged in.');
    });
  };
});
