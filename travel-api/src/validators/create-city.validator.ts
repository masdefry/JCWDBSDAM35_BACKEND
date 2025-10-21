import { body } from 'express-validator';

export const createCityValidator = [
  body('city')
    .notEmpty()
    .withMessage('City name is required')
    .isString()
    .withMessage('City name must be string')
    .isLength({ min: 5, max: 100 })
    .withMessage('City name have 5 min characters and 100 max characters')
    .trim()
    .escape(),

  body('country')
    .notEmpty()
    .withMessage('Country name is required')
    .isString()
    .withMessage('Country name must be string')
    .isLength({ min: 5, max: 100 })
    .withMessage('Country name have 5 min characters and 100 max characters')
    .trim()
    .escape(),
];
