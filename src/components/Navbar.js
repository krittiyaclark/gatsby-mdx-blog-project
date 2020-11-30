import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import logo from "../assets/logo.svg"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="navbar-header">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
          <button className="toggle-btn">
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
