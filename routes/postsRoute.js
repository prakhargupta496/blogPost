const router = require('express').Router();

const postsById = require('./../controllers/posts/byId');

router.get('/posts/:postId', postsById);

module.exports = router;
