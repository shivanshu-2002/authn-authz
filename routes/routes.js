const express = require('express');

const router = express.Router();
// import Controller ..
const {createPost,getPost} = require('../controller/postController');
const {createComment} = require('../controller/commentController');
const {createLike,createUnlike} = require('../controller/likeController');
// Map the paths with controller...
router.post("/posts/create",createPost);
router.get("/posts",getPost);
router.post("/comments/create",createComment);
router.post("/likes/like",createLike);
router.post("/likes/unlike",createUnlike);

module.exports = router;