import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setMessage('Both title and body are required');
      return;
    }

    const newPost = { title, body };

    // For now, log the new post
    console.log('New Post:', newPost);

    // You can replace this with an actual API request to save the post
    setMessage('Post Created Successfully!');
    setTitle('');
    setBody('');
  };

  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post body"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;