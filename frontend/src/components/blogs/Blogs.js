import './blogs.css'

import blogService from '../../services/blogs'
import Blog from './Blog'

const Blogs = ({blogs,setBlogs}) => {

  const modifyLikes = async (newBlog) =>{
    try{
      const returnedBlog = await blogService.update(newBlog)
      setBlogs(blogs.map(blog => blog.id !== newBlog.id?blog:returnedBlog))
      // setNotification(`You Liked This Blog`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
    catch{
      alert('Some Error Occur!')
      // setNotification(`Some Error Occur!`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
  }

  const deleteBlog = async (id)=>{
    try{
      const ans = window.confirm('are you sure you want to delete the blog')
      if(ans){
      await blogService.del(id)
      setBlogs(blogs.filter(blog=> blog.id!=id))
      }
    }
    catch{
      alert('Some Error Occur! in delte frontend')
      // setNotification(`Some Error Occur! in delte frontend`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
  }

  return (
    <div className='blogs'>
      {blogs.map(blog => <Blog key={blog.id} id={blog.id} blog={blog} modifyLikes={modifyLikes} deleteBlog={deleteBlog} />)}
    </div>
  )
}

export default Blogs