const express = require('express');
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
