const { Router } = require('express');
const {
  getAll,
  addPost,
  getById,
  update,
  deleteById,
} = require('../controllers/post.controller');
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const { postValidator } = require('../middlewares/validation');

const router = Router();

router
  .get('/', asyncMiddleware(getAll))
  .post('/', postValidator, asyncMiddleware(addPost))
  .get('/:id', asyncMiddleware(getById))
  .patch('/:id', postValidator, asyncMiddleware(update))
  .delete('/:id', asyncMiddleware(deleteById));

module.exports = router;
