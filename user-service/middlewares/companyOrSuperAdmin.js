const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

const authenticateAndAuthorize = async (req, res, next) => {
    try {
        console.log("hello erher")
        // Extract the token from the Authorization header
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Access denied. Token not provided.' });
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.SUPER_TOKEN_SECRET);
        req.user = decodedToken; // Assign the decoded token to req.user

        // Check if the user is a company admin
        const employee = await Employee.findById(decodedToken.userId);
        if (employee && employee.isCompanyAdmin) {
            req.user.isCompanyAdmin = true; // Add a flag to indicate the user is a company admin
        }
   
        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Handle errors (e.g., invalid token, database errors)
        console.error(err);
        return res.status(403).json({ error: 'Invalid token or unauthorized access.' });
    }
};

module.exports = {authenticateAndAuthorize};
