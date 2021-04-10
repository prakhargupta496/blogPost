const Post = require('../../models/Post');

module.exports = async (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  try {
    const savedPost = await post.save();
    res.redirect('/');
  } catch (error) {
    res.json({ error });
  }
};
