const refactorPost = (post) => {
  const refactoredPost = {
    id: post.id,
    title: post.title,
    body: post.body,
  };
  return refactoredPost;
};

module.exports = refactorPost;
