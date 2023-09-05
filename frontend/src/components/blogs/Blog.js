import './blog.css'
import blogService from '../../services/blogs'
import { Link, useNavigate, useParams } from 'react-router-dom'

const content = `Surface that completely repels fluids, such as water, blood, or oil, is a longstanding quest in engineering and materials science. Such a material lends itself to a wide range of applications, from water harvesting to food processing to biomedical technologies. Even as researchers have made progress developing materials with these capabilities, it’s remained unclear how exactly fluids behave on such surfaces. In a recent paper in Nature Communications, researchers describe for the first time how water droplets coalesce on the surface of an oil-impregnated surface.

More than a decade ago, research groups in the United States and France independently proposed a new approach for devising a fluid-repelling surface, inspired by a mechanism found in nature. Their idea was to add microscopic structures to the surface of a substrate and coat the whole thing with oil. The porous texture holds the oil in place with capillary forces, and droplets of water or other fluids could slide off the defect-free surface without sticking. “These are reported to have a lot of very promising properties,” says Haobo Xu, now a graduate student in materials science at Cornell University and first author on the study.

But at the same time, he says, the physics of droplet behavior on these slippery surfaces hasn’t been thoroughly studied. The recent paper, from researchers at the University of Michigan in Ann Arbor and The Ohio State University in Columbus, explicates how exactly drops converge. They found that when droplets form close together—but aren’t quite touching—they form a wetting ridge, made of oil, in between. That ridge facilitates an attraction between the droplets, drawing them together to merge.

“Our work shows how two droplets coalesce,” says Yimin Zhou, a graduate student at Michigan’s Energy Transport Laboratory (ETL), which is led by mechanical engineer Solomon Adera. Notably, she says, the group found that drops combine slower on the oil-coated, engineered surface than they do on other hydrophobic materials but slip away faster. “The lubricated surface can enhance the rate of condensation,” Zhou adds.

That property, she says, makes the material an appealing candidate for applications involving condensation or water collection. In a steam-driven power plant, for example, boiling water produces steam, and the steam spins a turbine that generates electricity. The steam is collected, condensed, and returned to liquid. If the new material were used in the condenser, she says, the plant could more quickly collect the used water, perhaps making the system more efficient. The material might also be used in devices that harvest water out of the air, “especially in dry areas without much drinking water,” Zhou says. Oil-infused materials would be useful in food processing and storage, too, because they prevent material—including germs—from sticking to the sides of a container.

The first oil-impregnated surfaces appeared in a 2005 paper by French physicist David Quéré. In 2011, a group based out of Harvard University’s Wyss Institute for Biologically Inspired Engineering developed a material inspired by how carnivorous pitcher plants catch their prey. The plant secretes a slick substance that coats the trap, and the unlucky insect slides into digestive juices at the foot of the pitcher. They named their design SLIPS, for slippery liquid-infused porous surfaces. The other group described their design, which similarly used tiny cavities on the surface to trap oil. In both cases, droplets effortlessly slid off without catching.

Patricia Weisensee, a mechanical engineer at Washington University in St. Louis, leads a thermal fluids research group that has been investigating the materials. Her group and others have shown how droplets can scoot across an oil-infused surface. “During condensation, even microscopic droplets attract each other and create a very strong motion on the surface,” she explains.

The Michigan researchers wanted to know more about the process, so they created their material by first fabricating an array of tiny silicon pillars—each less than 10 micrometers across and less than 30 micrometers tall—on a substrate. They coated the surface with a thin layer of silicone oil. Then, they placed two droplets, each about a millimeter in diameter, about 2.8 millimeters apart, and started filming. The researchers observed that the oil formed a wetting ridge around each droplet at the point of contact, and between the two droplets, the wetting ridge rose higher.

The wetting ridge—a feature not found on nonlubricated hydrophobic surfaces—facilitated the behavior of the droplets. The researchers observed three stages. First was attraction, as the droplets approached each other. Second, the oil in the wetting ridge drained away, and third, the two droplets fully merged. The entire process finished in a little less than 30 seconds.

Timing matters, says Weisensee. “In heat transfer, what’s important is to prevent the condensing fluid from forming a film, which acts as thermal resistance,” she says. Because droplets slide so easily on oil-infused surfaces, Weisensee notes, they can readily clear the surface and prevent detrimental flooding. That’s important not only for the condensation of water, but also for fluids such as ethanol or hexane.

Zhou says ETL researchers see other opportunities to explore droplet behaviors, including how droplet mergers affect the long-term characteristics of the material. “When the droplets grow to a certain large size, they fall down, and when they fall, they take oil with them,” she says. Without a good <br></br> understanding of that drainage, which could contaminate the water or reduce the efficiency of the material, the material isn’t suitable for large-scale, industrial applications. If they can understand how coalescence affects the oil, “we can characterize how durable the surface is,” Zhou says. “If a lot of oil is depleted, the surface becomes useless.”`

const paragraphs = content.split("\n\n")


const Blog = ({ blogs ,setBlogs,user}) => {

  const navigate = useNavigate()

  const id = useParams().id
  const blog = blogs.find((blog) => blog.id === id)
  if(typeof blog =='undefined')
  return (
      <div className='blog'>
        Error! No blog found
        <Link className='navbar-link' to="/blogs">Go Back</Link>
      </div>
    )

  const modifyLikes = async (newBlog) => {
    try {
      const returnedBlog = await blogService.update(newBlog)
      setBlogs(blogs.map(blog => blog.id !== newBlog.id ? blog : returnedBlog))
      // setNotification(`You Liked This Blog`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
    catch {
      alert('Some Error Occur!')
      // setNotification(`Some Error Occur!`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
  }
  const likeHandler = () => {
    const newBlog = {
      ...blog,
      likes: blog.likes + 1
    }
    modifyLikes(newBlog)
    document.getElementById('heart-first').style.background = 'red';
    document.getElementById('heart-second').style.background = 'red';
    
  }
  const deleteHandler = () => {
    deleteBlog(id)
  }
  const deleteBlog = async (id) => {
    try {
      const ans = window.confirm('are you sure you want to delete the blog')
      if (ans) {
        
        await blogService.del(id)
        await setBlogs(blogs.filter(blog => blog.id != id))
        navigate('/blogs')
      }
    }
    catch {
      alert('Some Error Occur! in delte frontend')
      // setNotification(`Some Error Occur! in delte frontend`)
      // setTimeout(() => {setNotification('')}, 5000)
    }
  }
  return (
    <div className='blog'>
      <div className='blog-heading'>
        <h1>{blog.title}</h1>
        <p>
          by {blog.author}
          <span className='vl'></span>
          <b>August 25, 2023</b>
        </p>
      </div>
      <div className='blog-content'>
        {paragraphs.map((paragraph,index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className='hl'></div>
      <div className='blog-content-footer'>
        <div className="blog-likes">
          Likes: {blog.likes}
          <div id='heart' onClick={likeHandler}><span id='heart-first'></span><span id='heart-second'></span></div>
        </div>
        {blog.author === user?<div className='blog-footer-action'>
          <p className='blog-footer-btn remove' onClick={deleteHandler}> Remove</p>
          <p className='blog-footer-btn'> Edit Blog</p>
        </div>:<></>}
      </div>

    </div>

  )
}

export default Blog