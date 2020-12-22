const { check } = require('express-validator');

const imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|jpeg)/;
const regexTest = (value) => imageRegex.test(value);

const validator = [
  check('title')
    .isLength({ max: 100 })
    .withMessage('max 100 chars')
    .notEmpty()
    .withMessage('the title field cannot be empty.'),
  check('body')
    .isLength({ min: 4 })
    .withMessage('min 4 char')
    .notEmpty()
    .withMessage('the content field cannot be empty.'),
  check('image')
    .isEmpty()
    .isLength({ max: 500 })
    .withMessage('The image url must be less than 500 characters')
    .custom(regexTest)
    .withMessage('The image must be in png, jpg or jpeg format'),
  check('category')
    .isEmpty()
    .isLength({ max: 20 })
    .withMessage('max 20 chars')
    .isString()
    .withMessage('enter only alphanumeric characters'),
];

const postValidator = [
  check('title')
    .isLength({ max: 100 })
    .withMessage('max 100 chars')
    .notEmpty()
    .withMessage('the title field cannot be empty.'),
  check('body')
    .isLength({ min: 4 })
    .withMessage('min 4 char')
    .notEmpty()
    .withMessage('the content field cannot be empty.'),
];
module.exports = { validator, postValidator };
