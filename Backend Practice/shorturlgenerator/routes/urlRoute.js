const express = require('express');
const { generateShortURL } = require('../controller/urlController');

const router = express.Router();

router.post('/', generateShortURL);


module.exports = router;