import { body } from 'express-validator';

export const createTravelRouteValidator = [
  body('distanceKilometers')
    .notEmpty()
    .withMessage('Distance is required')
    .isInt({ gt: 0 })
    .withMessage('Distance must be number and positive number'),

  body('durationMinutes')
    .notEmpty()
    .withMessage('Duration is required')
    .isInt({ gt: 0 })
    .withMessage('Duration must be number and positive number'),

  body('originId')
    .notEmpty()
    .withMessage('Origin is required')
    .isString()
    .withMessage('Origin must be string')
    .trim()
    .escape(),

  body('destinationId')
    .notEmpty()
    .withMessage('Destination is required')
    .isString()
    .withMessage('Destination must be string')
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (value === req.body.originId) {
        throw new Error(
          'Destination city must be different from origin city'
        );
      }
      return true;
    }),
];
