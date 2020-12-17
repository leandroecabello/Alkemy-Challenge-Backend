// const { Post } = require('../../database');
const Post = require('../models/Post');

const postService = {};

postService.getAll = async () => {
  await Post.findAll({ attributes: ['id', 'title', 'image', 'category'] });
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

module.exports = postService;
