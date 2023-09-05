import './blogs.css'
import likeIcon from '../../assets/icons8-heart-48.png'
import { Link } from 'react-router-dom'

const Blogs = ({ blogs}) => {
  return (
      <div className='blogs'>
        {blogs.map(blog =>
          <div key={blog.id} className="blogCard">
            <div className="blogCard-header">
              <div className="blogCard-heading">
                <h1>{blog.title}</h1>
                <p>by {blog.author}</p>
              </div>
              <div className="blogCard-likes">
                Likes: {blog.likes}
                <img src={likeIcon}></img>
              </div>
            </div>
            <Link to={`/blogs/${blog.id}`} className="readNow-btn">Read Now</Link>
          </div>
        )}
      </div>
  )
}

export default Blogs