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

app.controller('inputCtrl', function($scope, $http, crfData){

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
      crfData.save(JSON.stringify($scope.form));
    };

});

app.controller('outputCtrl', function($scope, crfData){
  console.log('outputCtrl hit');
  $scope.crf = '';
  crfData.open().success(function(data){
    $scope.crf = data;
  });
});

app.controller('listCtrl', function($scope, crfData){
  console.log('listCtrl hit');
  crfData.list().success(function(data){
    $scope.crfList = data.results;
  });
  $scope.openCrf = function(objectId){
    return crfData.openLink(objectId);
  };
});

app.factory('crfData', function($http, $location){
  return {
    apiPath: 'https://api.parse.com/1/classes/crf',
    currentObject: '',
    save: function(formData){
      var that = this;
      $http({method: 'POST', url: this.apiPath, headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}, data: formData})
      .success(function(data){
        that.currentObject = data.objectId;
        // console.log(that.currentObject);
        $location.path('/output');
        // return data.objectId;
      })
      .error(function(){
        console.log('Oops! Something bad happened.');
      });
    },
    open: function(){
      return $http({method: 'GET', url: this.apiPath + '/' + this.currentObject, headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}});
    },
    list: function(){
      console.log('crfData.list hit');
      return $http({method: 'GET', url: this.apiPath, headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}});
    },
    openLink: function(objectId){
      return $http({method: 'GET', url: this.apiPath + '/' + objectId, headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}});
    }
  };
});
