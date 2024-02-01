const { validationResult, body } = require('express-validator');

// Validation middleware for request body
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({ errors: errors.array() });
  };
};

// user validation rules
const createUserValidationRules = [
  body('username').notEmpty().withMessage('Username is required'),
  body('firstName').optional(),
  body('lastName').optional(),
  body('password').notEmpty().withMessage('Password is required'),
  body('driverLicense').optional(),
  body('vehicles').optional(),
];


module.exports = {
  validate,
  createUserValidationRules,
};
