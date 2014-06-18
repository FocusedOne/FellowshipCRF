'use strict';

app.controller('loginCtrl', function($scope, AuthService){
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(){
    AuthService.login($scope.credentials)
    .success(function(data){
      console.log('logged as user: ' + data.username);
      console.log('sessionToken: '+ data.sessionToken);
      $scope.currentUser = data;
      $scope.loggedIn = true;
    })
    .error(function(data){
      console.log('there was a problem and you are not logged in.');
    });
  };
});
