const router = require('express').Router();

const getCompose = require('./../controllers/compose/getCompose');
const postCompose = require('./../controllers/compose/postCompose');

router.get('/compose', getCompose);
router.post('/compose', postCompose);

module.exports = router;
