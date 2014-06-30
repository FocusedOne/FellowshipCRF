'use strict';

app.factory('crfData', function($http, $location){
  return {
    apiPath: 'https://api.parse.com/1/classes/crf',

    //save a new data object to Parse
    save: function(formData){
      return $http({
        method: 'POST',
        url: this.apiPath,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
          },
        data: formData
      })
      .error(function(){
        console.log('Oops! Something bad happened.');
      });
    },

    //opens Parse object objectId
    open: function(objectId){
      return $http({
        method: 'GET',
        url: this.apiPath + '/' + objectId,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        }
      });
    },

    //lists all items in the Parse class
    list: function(){
      return $http({
        method: 'GET',
        url: this.apiPath,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        }
      });
    },

    //updates an existing data object in Parse
    update: function(objectId, formData){
      return $http({
        method: 'PUT',
        url: this.apiPath + '/' + objectId,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        },
        data: formData
      })
      .error(function(){
        console.log('Oops! Something bad happened.');
      });
    },

    //removes an object from Parse
    delete: function(objectId){
      console.log('crfData.delete hit');
      return $http({
        method: 'DELETE',
        url: this.apiPath + '/' + objectId,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        }
      });
    }
  };
});
