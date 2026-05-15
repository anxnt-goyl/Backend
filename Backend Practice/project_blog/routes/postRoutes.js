const express = require("express");
const router = express.Router();
const postController = require('../controllers/postController');
router.get('/',postController.getAllpost);
router.get('/:id',postController.getpostbyid);
module.exports= router;