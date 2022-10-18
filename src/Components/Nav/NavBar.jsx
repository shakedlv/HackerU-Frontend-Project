import React from 'react'

function NavBar() {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container d-flex justify-content-center">
          <a className="navbar-brand" href="#!">
          <img src={process.env.PUBLIC_URL + "/Images/Pizza_Logo.png"} alt="" width="42" height="42"/>
          </a>
      </div>
    </nav>
  )
}

export default NavBar