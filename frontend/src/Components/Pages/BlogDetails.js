import React, {useState, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams, useNavigate  } from 'react-router-dom'
import { Box, InputLabel, TextField, Typography, Button } from '@mui/material';

const BlogDetails = () => {
    const [blog,setBlog]= useState({})
    const id = useParams().id;
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        
      });
    //get blog details
    const getBlogDetail = async () => {
        try {
            const {data} = await axios.get(`https://personal-blog-tan-nine.vercel.app/${id}`)
            if (data?.success){
                setBlog(data?.blog);
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBlogDetail()
        
    }, [id] );
   
    
      // Input change
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
      };
    
      // Form submit
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const {data} = await axios.put(`/api/v1/blog/update-blog/${id}`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.image,
            user: id,
          });
          if (data?.success) {
            toast.success('Blog Updated!');
            navigate('/my-blogs');
          }
        } catch (error) {
          console.log(error);
        }
      };
     
    console.log(blog);

  return (
    <>
       <form onSubmit={handleSubmit}>
        <Box
          width={'40%'}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={'10px 10px 20px #ccc'}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="black"
          >
            Update a post
          </Typography>
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px',  }}>Title</InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px' }}>Description</InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px' }}>Image URL</InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <Button type="submit" color="warning" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </>
  )
}

export default BlogDetails