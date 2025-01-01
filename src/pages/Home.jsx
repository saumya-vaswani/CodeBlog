import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dev.to/api/articles?page=${page}&per_page=10`);
        const data = await response.json();
        setBlogs((prevBlogs) => [...prevBlogs, ...data]);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  // Infinite scrolling handler
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {blogs.map((blog, index) => (
        <BlogCard key={`${blog.id}-${index}`} blog={blog} />
      ))}
      {isLoading && <p>Loading more blogs...</p>}
    </div>
  );
};

export default Home;
