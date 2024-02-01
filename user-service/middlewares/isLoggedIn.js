const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied. Token not provided.' });

  try {
    const decodedToken = jwt.verify(token, 'jwtsecret');
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token or unauthorized access.' });
  }
};

module.exports = isLoggedIn;
