'use strict';

app.controller('listCtrl', function($scope, crfData){
  crfData.list().success(function(data){
    $scope.crfList = data.results;
  });

  $scope.deleteCRF = function(objectId){
    return crfData.delete(objectId);
  };
});
