'use strict';

app.controller('FormCtrl', function($scope){
  $scope.forms = {};

  
  $scope.form = {
    //ministry info
    ministryEventName: '',
    ministryChoice: '',
    ministryAccount: '',
    ministryProjectContact: '',
    ministryProjectContactPhone: '',
    ministryOverseer: '',
    ministryOverseerPhone: '',

    //campusWidePromotion - checkboxes?

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
      //printRequest: '',
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
      //websiteSite selection?
    websiteWebpage: '',
    websiteCopyDates: '',
    websiteCopyText: '',
      //website gfx type
    websiteGfxDates: '',
    websiteGfxDescription: '',

    //social media
      //social campus selection
    socialDates: '',
    socialCopy: '',

    //email blast
      //email campus selection
    emailList: '',
    emailDates: '',
    emailCopy: '',
      //gfx/vid embed?
  };
  console.log('FormCtrl loaded');
});