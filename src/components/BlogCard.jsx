import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.description || blog.body}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default BlogCard;
