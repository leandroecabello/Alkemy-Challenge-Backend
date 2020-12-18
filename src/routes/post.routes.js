const { Router } = require('express');
const {
  getAll,
  addPost,
  getById,
  update,
  deleteById,
} = require('../controllers/post.controller');
const { validator, HandleError } = require('../middlewares/middlewares');

const router = Router();

router
  .get('/', getAll)
  .post('/addPost', validator, HandleError(addPost))
  .get('/:id', getById)
  .patch('/editPost/:id', validator, update)
  .delete('/deletePost/:id', deleteById);

module.exports = router;
