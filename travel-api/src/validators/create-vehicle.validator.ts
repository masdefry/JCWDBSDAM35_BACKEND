import { body } from 'express-validator';

export const createVehicleValidator = [
  body('name')
    .notEmpty()
    .withMessage('Vehicle name is required')
    .isString()
    .withMessage('Vehicle name must be string')
    .trim()
    .escape(),

  body('availableSeat')
    .notEmpty()
    .withMessage('Total vehicle seat is required')
    .isInt({ gt: 0 })
    .withMessage('Total vehicle seat must be number and positive number')
    .toInt(),

  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be string')
    .trim()
    .escape(),
];
