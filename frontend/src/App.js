import Navbar from './Components/Navbar/Header';
import { Routes, Route } from 'react-router-dom';
import Blog from './Components/Pages/Blog';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Blogging from './Components/Pages/Blogging';
import CreateBlog from './Components/Pages/CreateBlog';
import BlogDetails from './Components/Pages/BlogDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Moderustic',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/my-blogs" element={<Blogging />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
