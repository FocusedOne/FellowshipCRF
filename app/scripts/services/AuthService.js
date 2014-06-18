'use strict';

app.factory('AuthService', function($http){
  return {
    login: function(credentials){
      return $http({
        method: 'GET',
        url: 'https://api.parse.com/1/login',
        params: {
          username: credentials.username,
          password: credentials.password
        },
        headers: {
          'X-Parse-Application-Id': PARSE_APP_ID,
          'X-Parse-REST-API-Key': PARSE_REST_KEY,
          'Content-Type':'application/json'
        }
      });
    }
  };
});
