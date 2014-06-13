/*global app: true */
'use strict';

var app = angular.module('fellowshipCrfApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/fullForm.html',
      controller: 'inputCtrl'
    })
    .when('/output', {
      templateUrl: 'views/formOutput.html',
      controller: 'outputCtrl'
    })
    .when('/all', {
      templateUrl: 'views/formList.html',
      controller: 'listCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.controller('inputCtrl', function($scope, $http, $location){

    $scope.printRequestOptions = [{label: 'Quote Request', value: 'Quote Request'}, {label: 'New Project Request', value: 'New Project Request'}, {label: 'Reprint with no changes - provide sample.', value:'Reprint with no changes - provide sample.'}, {label: 'Changes to existing document - provide edited copy.', value: 'Changes to existing document - provide edited copy.'}];
    $scope.websiteSiteOptions = [{label: 'Little Rock', value: 'Little Rock'}, {label: 'Benton', value: 'Benton'}, {label:'Cabot', value:'Cabot'}, {label: 'Sageworks', value: 'Sageworks'}, {label: 'Missions', value: 'Missions'}, {label: 'FSM', value: 'FSM'}, {label: 'Women', value: 'Women'}];
    $scope.form = {
      //ministry info
      ministryEventName: '',
      ministryChoice: '',
      ministryAccount: '',
      ministryProjectContact: '',
      ministryProjectContactPhone: '',
      ministryOverseer: '',
      ministryOverseerPhone: '',


      campusWidePromotionCampus: {},

      //bulletin announcement
      bulletinSpotlightCopy: '',
      bulletinSpotlightDates: '',
      bulletinComingSoonCopy: '',
      bulletinComingSoonDates: '',
      bulletinThisWeekCopy: '',
      bulletinThisWeekDates: '',

      //tmaf announcement
      tmafCopy: '',
      tmafMonth: '',

      //connection center booth
      connectionCenterPerson: '',
      connectionCenterItems: '',
      connectionCenterDates: '',

      //print media
      printRequest: {},
      printProjectInfo: '',
      printLogoDates: '',
      printPostersQuantity: '',
      printPostersDates: '',
      printFlyersQuantity: '',
      printFlyersDates: '',
      printBrochuresQuantity: '',
      printBrochuresDates: '',
      printNotebooksQuantity: '',
      printNotebooksDates: '',
      printOtherQuantity: '',
      printOtherDates: '',
      printOtherDescription: '',

      //website
      websiteSite: {},
      websiteWebpage: '',
      websiteCopyDates: '',
      websiteCopyText: '',
      websiteGfxType: {},
      websiteGfxDates: '',
      websiteGfxDescription: '',

      //social media
      socialCampus: {},
      socialDates: '',
      socialCopy: '',

      //email blast
      emailCampus: {},
      emailList: '',
      emailDates: '',
      emailCopy: '',
      emailEmbed: ''
    };

    $scope.submitCRF = function(){
      console.log('submitCRF hit');
      // crfService.save(JSON.stringify($scope.form));
      // $location.path('/output/');
    };

});

app.controller('outputCtrl', function($scope){
  console.log('outputCtrl hit');
});

app.controller('listCtrl', function($scope){
  console.log('listCtrl hit');
});
