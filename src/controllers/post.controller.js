const boom = require('@hapi/boom');
const { validationResult } = require('express-validator');
const postService = require('../services/post.service');

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    res.send(boom.badRequest(err));
  }
};

postCtrl.addPost = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationError = boom.badRequest();
    validationError.output.payload.details = errors.array();
    throw validationError;
  }

  const { title, content, image, category } = req.body;

  const post = await postService.store({ title, content, image, category });
  console.log(post);
  res.status(201).json({ message: 'Operation created successfully', post });
};

postCtrl.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.getOneById(id);
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    res.send(boom.badImplementation(err));
  }
};

postCtrl.update = async (req, res) => {
  const { id } = req.params;
  const { title, content, image, category } = req.body;
  try {
    const operation = await postService.setUpdate(
      { title, content, image, category },
      id
    );
    res
      .status(200)
      .json({ message: 'Operation updated successfully', operation });
  } catch (err) {
    res.send(boom.badImplementation(err));
  }
};

postCtrl.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await postService.deleteOneById(id);
    res
      .status(200)
      .json({ message: `Operation with id: ${id} was deleted successfully` });
  } catch (err) {
    res.send(boom.badImplementation(err));
  }
};

module.exports = postCtrl;
