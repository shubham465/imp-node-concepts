const jwt = require('jsonwebtoken')

const ValidateToken = (req, res, next) => {

    let token
    
    if(req.headers && req.headers.authorization)
    token = req.headers.authorization.split(' ')[1]

    if(!token){
        return res.json({message: 'Access Denied! No token present.'})
    }
    
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }
    catch(err){
        res.json({message: 'Token failed'})
        throw new Error('Access Denied!')
    }
}

module.exports = ValidateToken