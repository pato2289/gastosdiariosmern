const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

module.exports = async function(req,res,next){
    if(req.path != '/auth/login' && req.path != '/'){
        if(req.headers.authorization){
            let token = await req.headers.authorization.split(' ')[1];
            jwt.verify(token,CONFIG.SECRET_TOKEN,function(error,decoded){
                if(error) return res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...',error});
                if(req.method != 'GET'){
                    if(decoded.role === 'admin') {
                    console.log('decoded: ', decoded)
                    res.status(200).send({message: 'Todo ok!: ', decoded})
                    next();
                    }
                    else res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...'});
                }else{
                    next();
                }
            });
        }else res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...'});
    }else next();
}