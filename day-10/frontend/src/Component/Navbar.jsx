import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
<Link to="/">Home</Link>
<Link to="/Signup">Signup</Link>
<Link to="/Login">Login</Link>
<Link to="/AddLectures">AddLectures</Link>

    </div>
  )
}

export default Navbar