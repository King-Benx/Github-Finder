import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar = ({ title }) => {

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="." className="brand-logo">{title}</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Hello React!"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar
