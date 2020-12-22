const boom = require('@hapi/boom');
const { validationResult } = require('express-validator');
const {
  responseWithoutError,
  validationErrorHandler,
} = require('../utils/responsesBuilder');
const { HTTP_CODE } = require('../config/config');
const refactorPost = require('../utils/refactoredPost');
const {
  getAll,
  getOneById,
  store,
  setUpdate,
  deleteOneById,
} = require('../services/post.service');

const { CREATE, OK } = HTTP_CODE;

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
  const data = await getAll();
  const posts = data.map(refactorPost);
  console.log(posts);
  responseWithoutError(res, OK, posts);
};

postCtrl.addPost = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw validationErrorHandler(errors);
  }

  const post = await store(req.body);
  console.log(post);
  responseWithoutError(res, CREATE, {
    message: 'Operation created successfully',
    post,
  });
};

postCtrl.getById = async (req, res) => {
  const { id } = req.params;
  const post = await getOneById(id);
  if (post === null) {
    throw boom.badRequest('Post not found');
  } else {
    responseWithoutError(res, OK, post);
  }
};

postCtrl.update = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw validationErrorHandler(errors);
  }

  const post = await setUpdate(req.body, id);
  if (post[0] === 0) {
    const error = 'There is not any post with this id';
    throw boom.badRequest(error);
  }
  responseWithoutError(res, OK, {
    message: 'Operation updated successfully',
    post,
  });
};

postCtrl.deleteById = async (req, res) => {
  const { id } = req.params;
  const post = await deleteOneById(id);
  console.log(post);
  if (!post) {
    const error = 'There is not any post with this id';
    throw boom.badRequest(error);
  }
  responseWithoutError(res, OK, {
    message: `Operation with id: ${id} was deleted successfully`,
  });
};

module.exports = postCtrl;
