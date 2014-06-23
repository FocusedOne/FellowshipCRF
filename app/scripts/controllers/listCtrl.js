'use strict';

app.controller('listCtrl', function($scope, crfData, Users){
  $scope.currentUser = '';
  $scope.loggedIn = false;
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    Users.login($scope.user)
    .success(function(){
      $scope.loggedIn = true;
    });
  };

  crfData.list().success(function(data){
    $scope.crfList = data.results;
  });

  $scope.deleteCRF = function(objectId){
    //TODO: force view to update on delete
    return crfData.delete(objectId);
  };

});
