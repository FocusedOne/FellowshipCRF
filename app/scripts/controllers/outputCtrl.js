'use strict';

app.controller('outputCtrl', function($scope, $routeParams, crfData){
  var objectId = $routeParams.id;
  crfData.open(objectId).success(function(data){
    $scope.crf = data;
  });
});
