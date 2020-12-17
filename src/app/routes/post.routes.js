const { Router } = require('express');
const postCtrl = require('../controllers/post.controller');

const router = Router();

router
  .get('/', postCtrl.getAll)
  .post('/addPost', postCtrl.addPost)
  .get('/:id', postCtrl.getById)
  .patch('/editPost/:id', postCtrl.update)
  .delete('/deletePost/:id', postCtrl.deleteById);

module.exports = router;
