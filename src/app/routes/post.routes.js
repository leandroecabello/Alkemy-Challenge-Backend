const { Router } = require('express');

const router = Router();
const postCtrl = require('../controllers/post.controller');

router.get('/', postCtrl.getAll).post('/add-post', postCtrl.addPost);
