'use strict';

app.factory('Authentication', function($http, Session){
  return {
    apiPath: 'https://api.parse.com/1/users',

    login: function(user){
      console.log('Authentication.login hit');
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
      })
      .then(function(data){
        console.log('Authentication.login.then hit');
        Session.create(data.sessionToken, data.username);
        console.log('session created');
        console.log('sessionId: ' + Session.sessionId);
      });
    }
  };
});
