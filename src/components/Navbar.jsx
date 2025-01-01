import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <div className="navbar">
    <h1>CodeBlog</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  </div>
);

export default Navbar;
