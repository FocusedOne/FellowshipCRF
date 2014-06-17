'use strict';

app.directive('login', function(){
  return {
    restrict: 'E',
    templateUrl: '/partials/login.html',
    controller: function($scope, $location, Users){
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.loginUser = function(){
        Users.login($scope.user)
        .success(function(data){
          console.log(data.username + ' logged in! sesh id is ' + data.sessionToken);
          $location.path('/session/' + data.sessionToken);
        });
      };
    }
  };
});
