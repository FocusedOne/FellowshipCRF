'use strict';
//defunct?
app.factory('Users', function($http){
  return {
    apiPath: 'https://api.parse.com/1/users',

    create: function(user){
      console.log('users.create hit with user: ' + user.username);
      return $http({
        method: 'POST',
        url: this.apiPath,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
          },
        data: user
      });
    },

    login: function(user){
      return $http({
        method: 'GET',
        url: 'https://api.parse.com/1/login',
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        },
        params:{
          'username': user.username,
          'password': user.password
        }
      });
    },

    getUser: function(sessionId){
      return $http({
        method: 'GET',
        url: 'https://api.parse.com/1/users/me' ,
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'X-Parse-Session-Token': sessionId
        }
      });
    }

  };
});
