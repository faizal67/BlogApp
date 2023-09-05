import './createBlog.css'
import blogService from '../../services/blogs'
import { useState } from 'react'



const CreateBlog = ({blogs,setBlogs}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreatBlog = (event)=>{
    event.preventDefault()
    const newBlog = {
      title:title,
      author: author,
      url: url
    }
    addBlog(newBlog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }


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
      <h1 className='createBlog-heading'> Create New Blog </h1>
      <form onSubmit={handleCreatBlog} className='createBlog-form'>
        <div >
          <label className='inputField-title-label'>Title of the Blog:</label><br />
          <input className='inputField-title-input'
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
        <label className='inputField-content-label'>Start your Blog:</label><br />
          <textarea
            className='inputField-content-input'
            type="textbox"
            value={url}
            name='url'
            rows="10"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type='submit' className='createBlog-btn'>Create now</button>
      </form>
    </div>
  )
}

export default CreateBlog