const { Router } = require('express');
const {
  getAll,
  addPost,
  getById,
  update,
  deleteById,
} = require('../controllers/post.controller');

const router = Router();

router
  .get('/', getAll)
  .post('/addPost', addPost)
  .get('/:id', getById)
  .patch('/editPost/:id', update)
  .delete('/deletePost/:id', deleteById);

module.exports = router;
