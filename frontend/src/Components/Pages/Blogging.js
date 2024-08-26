import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BlogCards from '../../BlogCards';

const Blogging = () => {
  const [blogs, setBlogs] = useState([])
  //get user blog
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem('userId')
        const {data} =  await axios.get(`/api/v1/blog/user-blog/${id}`);
        if(data?.success){
          setBlogs(data?.userBlog.blogs)
        }
    }catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <div>
       {blogs && blogs.length > 0 ? (blogs.map((blog) => (
        <BlogCards
          id={blog._id}
          isUser={true}
          title = {blog.title}
          description = {blog.description}
          image = {blog.image}
          username = {blog.user.username}
          time = {blog.createdAt}
           />  ))) : ( <p>You haven't Create a Blog</p> )
      }
    </div>
  )
}

export default Blogging