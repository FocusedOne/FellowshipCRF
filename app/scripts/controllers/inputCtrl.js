'use strict';

app.controller('inputCtrl', function($scope, $http, $location, $routeParams, crfData){

$scope.printRequestOptions = [{label: 'Quote Request', value: 'Quote Request'}, {label: 'New Project Request', value: 'New Project Request'}, {label: 'Reprint with no changes - provide sample.', value:'Reprint with no changes - provide sample.'}, {label: 'Changes to existing document - provide edited copy.', value: 'Changes to existing document - provide edited copy.'}];
$scope.websiteSiteOptions = [{label: 'Little Rock', value: 'Little Rock'}, {label: 'Benton', value: 'Benton'}, {label:'Cabot', value:'Cabot'}, {label: 'Sageworks', value: 'Sageworks'}, {label: 'Missions', value: 'Missions'}, {label: 'FSM', value: 'FSM'}, {label: 'Women', value: 'Women'}];

if($routeParams.id){
    $scope.id = $routeParams.id;
    crfData.open($routeParams.id).success(function(data){
    $scope.form = data;
  });
}
else{
  $scope.form = {

    campusWidePromoCheck: false,
    bulletinCheck: false,
    tmafCheck: false,
    onlineEventCheck: false,
    connectionCenterCheck: false,
    printMediaCheck: false,
    websiteCheck: false,
    socialCheck: false,
    emailCheck: false,

    revisions: 0,
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

    //online event registration
    onlineEventDates: '',
    onlineEventUsePrevious: '',
    onlineEventPricing: '',
    onlineEvent: '',

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
}

//$scope.submitCRF: Posts form data to Parse via crfData service
$scope.submitCRF = function(){
  if($routeParams.id){
    $scope.form.revisions++;
    crfData.update($scope.id, JSON.stringify($scope.form))
    .success(function(data){
      $location.path('/output/' + $scope.id);
    })
    .error(function(){
      console.log('Something went wrong updating your data.');
    });
  }
  else{
    crfData.save(JSON.stringify($scope.form)).success(function(data){
      $location.path('/output/' + data.objectId);
    });
  }

};

});
