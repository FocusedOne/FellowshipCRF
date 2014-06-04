'use strict';

app.controller('FormCtrl', function($scope){
  $scope.forms = {};

  $scope.ministries = ['FSK','FSM','Missions','Assimilation','Renew','Communications','Worship','Teaching Pastors','Recreation','Adult Discipleship'];
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