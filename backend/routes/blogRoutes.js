const express = require('express')
const { 
    getAllBlogsController, 
    createBlogController,
    updateBlogController,
    getBlogByIdController, 
    deleteBlogController,
    userBlogController
     } = require('../controllers/blogController')

//router object
const router = express.Router()

//routes
//GET  || all blogs
router.get('/all-blog', getAllBlogsController)

//POST  || create blog
router.post('/create-blog', createBlogController)

//PUT  || updat blog
router.put('/update-blog/:id', updateBlogController)

//GET ||  SIngle blog details
router.get('/get-blog/:id', getBlogByIdController)

//DELETE || DELETE BLOG
router.delete('/delete-blog/:id', deleteBlogController)

//Get || user blog 
router.get('/user-blog/:id', userBlogController)
module.exports = router