const router = require('express').Router();

const getHome = require('./../controllers/home/getHome');

router.get('/', getHome);

module.exports = router;
