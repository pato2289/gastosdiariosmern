// service.js
var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');

exports.createToken = function(username) {  
  var payload = {
    sub: username.id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.SECRET_TOKEN);
};