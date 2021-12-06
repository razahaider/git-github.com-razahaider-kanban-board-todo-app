import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="header-menu">
            <a href="#" className="navbar-menu">Home</a>
            <a href="#" className="navbar-menu">Tour</a>
            <a href="#" className="navbar-menu">Blog</a>
        </div>
        <p className="logo-kanban">Kanban</p>
        <div className="login-menu">
            <a href="#" id="sign-up">Sign up</a>
            <a href="#" id="login">Log in</a>
        </div>
          </header>
          <div className="sign-up-now">
          <p>Visually collaborate with anyone, anywhere</p>
          <a href="#" id="sign-up-for-free">Sign up For Free</a>
        </div>

    </div>
  )
}

export default Header
