import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const Home = () => (
  <div>
    <h2>Add a New Post</h2>
    <PostForm />
    <h2>Blog Posts</h2>
    <PostList />
  </div>
);

export default Home;
