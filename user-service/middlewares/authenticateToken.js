const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {

   try{
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ error: 'Access denied. Token not provided.' });
    }

    jwt.verify(token, process.env.SUPER_TOKEN_SECRET, (err, user) => {
        if (err) {
           
            return res.status(403).json({ error: 'Invalid token.' });
        }
       
        console.log(user)
        req.user = user;
       
        next(); 
    });

   }catch(err){
    console.log(err)
    return res.status(403).json({ error: 'Invalid token' });
   }
};

module.exports = authenticateToken
