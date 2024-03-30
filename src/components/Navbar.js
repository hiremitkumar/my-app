import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
         <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}> {/* for navbar backgroud_color */}
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
    </ul>
    <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>  {/* for radio button text color */}   
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Title}</label>
</div>
  </div>
</nav>
    </>
  )
}

Navbar.prototype={title:PropTypes.string}
