'use strict';
app.controller('FormCtrl', function($scope, $http){

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

  // $scope.form = {
  //   //ministry info
  //   ministryEventName: 'test data',
  //   ministryChoice: 'test data',
  //   ministryAccount: 'test data',
  //   ministryProjectContact: 'test data',
  //   ministryProjectContactPhone: 'test data',
  //   ministryOverseer: 'test data',
  //   ministryOverseerPhone: 'test data',


  //   campusWidePromotionCampus: {},

  //   //bulletin announcement
  //   bulletinSpotlightCopy: 'test data',
  //   bulletinSpotlightDates: 'test data',
  //   bulletinComingSoonCopy: 'test data',
  //   bulletinComingSoonDates: 'test data',
  //   bulletinThisWeekCopy: 'test data',
  //   bulletinThisWeekDates: 'test data',

  //   //tmaf announcement
  //   tmafCopy: 'test data',
  //   tmafMonth: 'test data',

  //   //connection center booth
  //   connectionCenterPerson: 'test data',
  //   connectionCenterItems: 'test data',
  //   connectionCenterDates: 'test data',

  //   //print media
  //   printRequest: {},
  //   printProjectInfo: 'test data',
  //   printLogoDates: 'test data',
  //   printPostersQuantity: 'test data',
  //   printPostersDates: 'test data',
  //   printFlyersQuantity: 'test data',
  //   printFlyersDates: 'test data',
  //   printBrochuresQuantity: 'test data',
  //   printBrochuresDates: 'test data',
  //   printNotebooksQuantity: 'test data',
  //   printNotebooksDates: 'test data',
  //   printOtherQuantity: 'test data',
  //   printOtherDates: 'test data',
  //   printOtherDescription: 'test data',

  //   //website
  //   websiteSite: {},
  //   websiteWebpage: 'test data',
  //   websiteCopyDates: 'test data',
  //   websiteCopyText: 'test data',
  //   websiteGfxType: {},
  //   websiteGfxDates: 'test data',
  //   websiteGfxDescription: 'test data',

  //   //social media
  //   socialCampus: {},
  //   socialDates: 'test data',
  //   socialCopy: 'test data',

  //   //email blast
  //   emailCampus: {},
  //   emailList: 'test data',
  //   emailDates: 'test data',
  //   emailCopy: 'test data',
  //   emailEmbed: 'test data'

  // };

  $scope.submitCRF = function(){
    var jsonForm = JSON.stringify($scope.form);
    $http({method : 'POST',url: 'https://api.parse.com/1/classes/crf', headers: { 'X-Parse-Application-Id':'TOO_HOT_FOR_GITHUB', 'X-Parse-REST-API-Key':'TOO_HOT_FOR_GITHUB', 'Content-Type':'application/json'}, data: jsonForm})
    .success(function(data, status) {
        alert('Success');
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
    })
    .error(function(data, status) {
        alert('Fail');
    });

  };
  console.log('FormCtrl loaded');

  
});