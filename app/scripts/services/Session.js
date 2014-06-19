'use strict';

app.service('Session', function(){
  var userIsAuthenticated = false;
  var username = '';
  var sessionToken = '';

  var that = this;
  this.create = function(user, session){
    that.username = user;
    that.sessionToken = session;
    that.userIsAuthenticated = true;
  };

  this.destroy = function(){
    that.username = '';
    that.sessionToken = '';
    that.userIsAuthenticated = false;
  };
});
