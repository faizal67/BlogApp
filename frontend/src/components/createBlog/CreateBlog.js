import './createBlog.css'
import BlogForm from './BlogForm'
import blogService from '../../services/blogs'



const CreateBlog = ({blogs,setBlogs}) => {

  const addBlog = async (newBlog) => {
    try {
      const returnedBlog = await blogService.create(newBlog)
      setBlogs(blogs.concat(returnedBlog))
      // setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`)
      // setTimeout(() => { setNotification('') }, 5000)
    }
    catch {
      alert('Some error occur! frontend ')
      // setNotification("Some error occur! frontend ")
      // setTimeout(() => { setNotification('') }, 5000)
    }
  }
  return (
    <div className='createBlog'>
      <BlogForm addBlog={addBlog} />
    </div>
  )
}

export default CreateBlog