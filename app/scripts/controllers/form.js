'use strict';

app.controller('FormCtrl', function($scope){
  $scope.forms = {};
  $scope.form = {
    ministryEventName: '',
    ministryChoice: '',
    ministryAccount: '',
    ministryProjectContact: '',
    ministryProjectContactPhone: '',
    ministryOverseer: '',
    ministryOverseerPhone: ''
  };
  console.log('FormCtrl loaded');
});