import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BlogCards from '../../BlogCards';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('/api/v1/blog/all-blog');
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs && blogs.map((blog) => (
          <BlogCards
           
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
         
      ))}
    </div>
  );
}

export default Blog;
