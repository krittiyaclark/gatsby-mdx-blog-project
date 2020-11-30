import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved</p>
      </>
    </footer>
  )
}

export default Footer
