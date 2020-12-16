const { Router } = require('express');
const postCtrl = require('../controllers/post.controller');

const router = Router();

router.get('/', postCtrl.getAll);

module.exports = router;
