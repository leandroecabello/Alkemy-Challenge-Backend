const Post = require('../models/post.model');

const postService = {};

postService.getAll = async (post) => {
  await Post.findAll(post);
};

postService.store = async (post) => {
  await Post.create(post);
};

postService.getOneById = async (id) => {
  await Post.findOne({ where: { id } });
};

postService.setUpdate = async (post, id) => {
  await Post.update(post, { where: { id } });
};

postService.deleteOneById = async (id) => {
  await Post.destroy({ where: { id } });
};
