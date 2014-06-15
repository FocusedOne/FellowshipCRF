'use strict';

app.controller('listCtrl', function($scope, crfData){
  crfData.list().success(function(data){
    $scope.crfList = data.results;
  });

  $scope.deleteCRF = function(objectId){
    //TODO: force view to update on delete
    return crfData.delete(objectId);
  };
});
