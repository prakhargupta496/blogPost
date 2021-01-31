const router = require('express').Router();

const about = require('./../controllers/misc/about');
const contact = require('./../controllers/misc/contact');

router.get('/about',about);

router.get('/contact', contact);

module.exports = router;
