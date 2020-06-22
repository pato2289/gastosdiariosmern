var jwt = require('jwt-simple'); 
var moment = require('moment'); 
var config = require('../config/config');

exports.ensureAuthenticated = function(req, res, next) { 

 if(!req.headers.authorization) {
 return res
 .status(403)
 .send({message: "Error"});
 }

 var token = req.headers.authorization.split(" ")[1];
 var payload = jwt.decode(token, config.SECRET_TOKEN);

 if(payload.exp <= moment().unix()) {
 return res
 .status(401)
 .send({message: "The token expires"});
 }

 req.payload = payload
 console.log('Payload es: ', req.payload)
 next();
}