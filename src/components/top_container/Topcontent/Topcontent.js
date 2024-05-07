import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='main'>
    <div className="topcontent">
        <div className='topcontent_container'>
           <h1>Mr.Deepak</h1>
           <p>software web developer</p>
           <a href="https://drive.google.com/file/d/1JDPRNTmh4LbV7bTdFrjcAPdDXtPJYClm/view"><button class="b1">Resume</button></a>
           <Link to="projects" smooth={true} duration={500}>
            <button class="b2">my work</button>
           </Link>
        </div>

    </div>
    <div className='about'>
          <h2>About</h2>
          <p>Aspiring software web developer with a passion for growth and adding value</p>
    </div>
    </div>
    
  )
}

export default Topcontent