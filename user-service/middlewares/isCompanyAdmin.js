const jwt = require('jsonwebtoken')
const Employee = require('../models/Employee')

const isCompanyAdmin = async (req, res, next) => {
    const token = req.header('Authorization')
    if (!token)
        return res
            .status(401)
            .json({ error: 'Access denied. Token not provided.' })

    try {
        const decodedToken = jwt.verify(token, process.env.COMPANY_TOKEN_SECRET)
        const employee = await Employee.findById(decodedToken.userId)

        if (!employee || !employee.isCompanyAdmin) {
            return res
                .status(403)
                .json({
                    error: 'Permission denied. User is not a company admin.',
                })
        }

        req.user = employee
        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid token or unauthorized access.' })
    }
}

module.exports = isCompanyAdmin
