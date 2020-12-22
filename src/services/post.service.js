const Post = require('../models/Post');

const postService = {};

postService.getAll = async () => {
  const res = await Post.findAll({
    attributes: ['id', 'title', 'body', 'image'],
  });
  return res;
};

postService.store = async (post) => {
  const res = await Post.create(post);
  return res;
};

postService.getOneById = async (id) => {
  const res = await Post.findOne({ where: { id } });
  return res;
};

postService.setUpdate = async (post, id) => {
  const res = await Post.update(post, { where: { id } });
  return res;
};

postService.deleteOneById = async (id) => {
  const res = await Post.destroy({ where: { id } });
  return res;
};

module.exports = postService;
