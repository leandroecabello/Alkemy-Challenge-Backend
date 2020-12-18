const { Router } = require('express');
const {
  getAll,
  addPost,
  getById,
  update,
  deleteById,
} = require('../controllers/post.controller');
const { postValidator } = require('../middlewares/middlewares');

const router = Router();

router
  .get('/', getAll)
  .post('/addPost', postValidator, addPost)
  .get('/:id', getById)
  .patch('/editPost/:id', postValidator, update)
  .delete('/deletePost/:id', deleteById);

module.exports = router;
