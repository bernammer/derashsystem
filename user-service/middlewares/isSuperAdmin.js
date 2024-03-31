const jwt = require('jsonwebtoken')
const SuperAdmin = require('../models/SuperAdmin')

const isSuperAdmin = async (req, res, next) => {
    const token = req.header('Authorization')
    if (!token)
        return res
            .status(401)
            .json({ error: 'Access denied. Token not provided.' })

    try {
        const decodedToken = jwt.verify(token, process.env.SUPER_TOKEN_SECRET)
        const superAdmin = await SuperAdmin.findById(decodedToken.userId)

        if (!superAdmin) {
            return res.status(403).json({
                error: 'Permission denied. User is not a super admin.',
            })
        }

        req.user = superAdmin
        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid token or unauthorized access.' })
    }
}

module.exports = isSuperAdmin
