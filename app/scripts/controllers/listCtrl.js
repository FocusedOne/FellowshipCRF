'use strict';

app.controller('listCtrl', function($scope, $window, crfData, Users){
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

  $scope.getList = function(){
    crfData.list().success(function(data){
      $scope.crfList = data.results;
    });
  };

  $scope.deleteCRF = function(objectId){
    crfData.delete(objectId);
  };

  $scope.remove = function(array, index, objectId){
    var confirmed = $window.confirm('Are you sure you want to delete this? This action cannot be undone.');
    if (confirmed){
      array.splice(index, 1);
      crfData.delete(objectId);
    }
  };

  $scope.getList();
});
