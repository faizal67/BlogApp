import './navbar.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import blogService from '../../services/blogs'
import Home from '../home/Home'
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import Blogs from '../blogs/Blogs'
import CreateBlog from '../createBlog/CreateBlog'
import Blog from '../blogs/Blog'

const Users = () => {
  return (
    <div>User</div>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogService.getAll().then(blogs =>                       //fetch all blogs from the server
      setBlogs(blogs)
    )
  }, [])


  useEffect(() => {                                       //effect hook for storing the state of user
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser') // fetch the user detail from  lcal st
    if (loggedUserJSON) {         //check weather the user already stored in the local storage or not
      const user = JSON.parse(loggedUserJSON)
      setUser(user.name)
      blogService.setToken(user.token)         //if user found in local storage token is set for the user
    }
  }, [])

  const logoutHandler = () => {
    window.localStorage.removeItem('loggedBlogappUser');
    setUser(null)
  }
  return (
    <Router>
      <div className='navbar'>
        {/* <div className='mobile'>
          <h4 className='navbar-logo'>Blogr</h4>
          {user ? <Link className='navbar-createBlog-btn' to="/createBlog">Create Blog</Link>:<></>}
          {toggleMenu
            ? <RiCloseLine color='black' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='mobile-nav-container'>
              <Link className='navbar-link' to="/">Home</Link>
              <Link className='navbar-link' to="/blogs">Blogs</Link>
              <Link className='navbar-link' to="/">Support</Link>
                {user
                  ? <div className='navbar-loggedin'>
                    
                    <button className='navbar-logout-btn' onClick={logoutHandler}>Log out</button>
                  </div>
                  : <div className='navbar-loggedout'>
                    <Link className='navbar-link' to="/login">Log in</Link>
                    <Link className='getStarted-btn' to="/signup">Get Started</Link>
                  </div>
                }
            </div>

          )}
        </div> */}

        <div className='navbar-left'>
          <h4 className='navbar-logo'>Blogr</h4>
          <div className='navbar-left-links'>
          <Link className='navbar-link' to="/">Home</Link>
          <Link className='navbar-link' to="/blogs">Blogs</Link>
          <Link className='navbar-link' to="/">Support</Link>
          </div>
        </div>
        <div className='navbar-right'>
          {user
            ? <div className='navbar-loggedin'>
              <Link className='navbar-createBlog-btn' to="/createBlog">Create Blog</Link>
              <p>Welcome {user}</p>
              <button className='navbar-logout-btn' onClick={logoutHandler}>Log out</button>
            </div>
            : <div className='navbar-loggedout'>
              <Link className='navbar-link' to="/login">Log in</Link>
              <Link className='getStarted-btn' to="/signup">Get Started</Link>
            </div>
          }
        </div>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setloginUser={setUser} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs}/>} />
        <Route path="/createBlog" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/users" element={<Users />} />
        <Route path='/blogs/:id' element={<Blog blogs={blogs} setBlogs={setBlogs} user={user}></Blog>}></Route>
      </Routes>

    </Router>
  )
}

export default Navbar