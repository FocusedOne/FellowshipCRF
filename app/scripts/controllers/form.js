'use strict';
app.controller('FormCtrl', function($scope){
  $scope.forms = {};

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
  console.log('FormCtrl loaded');

  
});