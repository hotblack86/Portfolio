import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      textDecoration: 'none'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textDecoration: 'none'
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        
        <Link 
          to="/about"
          style={{
            color: `white`,
            textDecoration: 'none',
            float: 'right' 
          }}
          >About</Link>
           <br />
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: 'none',
            float: 'right', 
          }}
          >Projects</Link>
      </h1>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
