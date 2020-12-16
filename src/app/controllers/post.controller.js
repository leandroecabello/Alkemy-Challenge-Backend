const postService = require('../services/post.service');

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
  res.send('hola');
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

module.exports = postCtrl;
