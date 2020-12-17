const postService = require('../services/post.service');

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
  }
};

postCtrl.addPost = async (req, res) => {
  const { title, content, image, category } = req.body;

  try {
    const post = await postService.store({
      title,
      content,
      image,
      category,
    });
    res.status(201).json({ message: 'Operation created successfully', post });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
  }
};

postCtrl.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.getOneById(id);
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
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
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
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
    console.log(err);
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
  }
};

module.exports = postCtrl;
