const Post = require('../models/postModel');

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
  console.log("Request body:", req.body);

};

const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const createPost = async (req, res) => {
//   const { title, content } = req.body;
//   const post = new Post({ title, content });
//   const createdPost = await post.save();
//   res.status(201).json(createdPost);
try {
    const newPost = new Post(req.body);
    console.log("Request body:", req.body);

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error saving post:", err);
    res.status(500).json({ message: "Error saving post" });
  }
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findById(req.params.id);
  if (post) {
    post.title = title;
    post.content = content;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
