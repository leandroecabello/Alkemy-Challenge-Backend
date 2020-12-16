const postService = require('../services/post.service');

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
  try {
    const operations = await postService.getAll();
    console.log(operations);
    res.status(200).json(operations);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Something went wrong. Please retry or contact with an admin.',
      message: err,
    });
  }
};
