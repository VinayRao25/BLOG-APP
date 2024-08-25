import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    console.log('Post created:', data);
} catch (error) {
    console.error('Error creating post:', error);
  }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label class="tit">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label class="cont">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
