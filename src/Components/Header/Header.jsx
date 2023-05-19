import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import "../Home/Home.scss"


const Header = () => {
   console.log(logo)
  return (
    <nav className="Header">

        <img src={logo} alt="logo" />

        <div>
            <Link to = "/tvshows">TV Shows</Link>
            <Link to = "/tvshows">Movies</Link>
            <Link to = "/tvshows">Recently Added</Link>
            <Link to = "/tvshows">My List</Link>
        </div>

        <FiSearch />
    </nav>
  )
}

export default Header
