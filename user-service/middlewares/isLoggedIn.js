const jwt = require('jsonwebtoken')

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token)
        return res
            .status(401)
            .json({ error: 'Access denied. Token not provided.' })

    try {
        const decodedToken = jwt.verify(token, process.env.USER_TOKEN_SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid token or unauthorized access.' })
    }
}

module.exports = isLoggedIn
