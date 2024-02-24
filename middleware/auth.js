const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied, token not defined');

    try{
        const decodedPayload = jwt.verify(token, 'jwtPrivateKey');
        req.user = decodedPayload;
        next();
    } catch(err) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = auth;
