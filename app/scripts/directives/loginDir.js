'use strict';

app.directive('login', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  };
});
