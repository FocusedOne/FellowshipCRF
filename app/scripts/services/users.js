'use strict';

app.factory('Users', function($http){
  return {
    apiPath: 'https://api.parse.com/1/users',

    create: function(user){
      console.log('users.create hit with user: ' + user.username);
    },

    login: function(){
      return $http({method: 'GET', url: 'https://api.parse.com/1/login', headers: {'X-Parse-Application-Id': PARSE_APP_ID, 'X-Parse-REST-API-Key': PARSE_REST_KEY, 'Content-Type':'application/json'}});
    }
  };
});
