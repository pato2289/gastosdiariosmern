const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const CONFIG = require('../config/config');
const jwt = require('jsonwebtoken')

function login(req, res){
    
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username: username})
        .then(user => {
            if(!user) return res.status(404).send({message: 'El usuario no existe'});
            //ya se que el usuario existe, ahora tengo que ver si coincide la pass ingresada con la de la BD
            bcrypt.compare(password,user.password)
                  .then(match => {
                    if(match){
                        payload = {
                            username: user.username,
                            email: user.email,
                            role: user.role
                        }
                        // Acceso correcto
                        jwt.sign(payload,CONFIG.SECRET_TOKEN,function(error, token){
                            if(error){
                                res.status(500).send({error})
                            } else {
                                res.status(200).send({message: 'Acceso permitido: ', token, payload})
                            }
                        })    
                    } else {
                        res.status(200).send({message: 'Password incorrecta'});
                    }
                  }).catch(err => {
                      console.log(err);
                      res.status(500).send({err});
                  });
        })
        .catch(err => console.log(err))
}

module.exports = login;