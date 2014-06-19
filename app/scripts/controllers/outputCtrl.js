'use strict';

app.controller('outputCtrl', function($scope, $routeParams, crfData, Session){
  var objectId = $routeParams.id;
  console.log('outputCtrl says: still authenticated? ' + Session.userIsAuthenticated);
  crfData.open(objectId).success(function(data){
    $scope.crf = data;
  });
});
