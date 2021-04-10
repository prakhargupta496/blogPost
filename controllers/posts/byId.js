const Post = require('./../../models/Post');

module.exports = async (req, res) => {
  const requestedPostId = req.params.postId;

  try {
    const post = await Post.findById(req.params.postId);
    res.render('post', {
      title: post.title,
      content: post.content,
    });
  } catch (error) {
    res.json({ error, msg: 'error' });
  }
};
