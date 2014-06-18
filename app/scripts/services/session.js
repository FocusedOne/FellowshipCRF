'use strict';

app.service('Session', function(){
  this.create = function(sessionId, username){
    this.sessionId = sessionId;
    this.username = username;
  };

  this.destroy = function(){
    this.sessionId = null;
    this.username = null;
  };

  return this;

});
