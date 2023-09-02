import Navbar from "./components/navbar/Navbar"

const App = () => {

  // const createBlogForm = () => (
  //   <Togglable buttonLabel='New Blog'>
  //     <BlogForm addBlog={addBlog} />
  //   </Togglable>



    // <form onSubmit={handleCreatBlog}>
    //   <h1>Create new Blog</h1>
    //   <div>
    //     title:
    //     <input
    //       type="text"
    //       value={title}
    //       name="Title"
    //       onChange={({ target }) => setTitle(target.value)}
    //     />
    //   </div>
    //   <div>
    //     author:
    //     <input
    //       type='text'
    //       value={author}
    //       name='author'
    //       onChange={({target}) => setAuthor(target.value)}
    //     />
    //   </div>
    //   <div>
    //     url:
    //     <input
    //       type='text'
    //       value={url}
    //       name='url'
    //       onChange={({target}) => setUrl(target.value)}
    //     />
    //   </div>
    //   <button type='submit'>Add</button>
    // </form>
  // )

  // const addBlog = async (newBlog) => {
  //   try {
  //     const returnedBlog = await blogService.create(newBlog)
  //     setBlogs(blogs.concat(returnedBlog))
  //     setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`)
  //     setTimeout(() => {setNotification('')}, 5000)
  //   }
  //   catch{
  //     setNotification("Some error occur! frontend ")
  //     setTimeout(() => {setNotification('')}, 5000)
  //   }
  // }

 

  

//****************************************************return **************************************** */
  // if (user === null)
  //   return (
  //     <div>
  //     <Notification notification={notification} />
  //     {loginForm()}
  //     </div>
  //   )
  // else
  //   return (
  //     <div>
  //       <Notification  notification={notification} />
  //       <h2>blogs</h2>
  //       <div>{user.name} logged in</div>
  //       <button type='button' onClick={handleLogout}>logout</button>
  //       {createBlogForm()}
  //       {blogs.map(blog => <Blog key={blog.id} id={blog.id} blog={blog} modifyLikes={modifyLikes} deleteBlog={deleteBlog}/>)}
  //     </div>
  //   )


  return (
    <Navbar></Navbar>

  )

}

export default App