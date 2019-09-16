import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import IosIonic from "react-ionicons/lib/IosIonic";

const Header = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const hamburgerStyle = hamburgerState ? "hamburger active" : "hamburger";
  const navListStyle = hamburgerState ? "nav-list active" : "nav-list";
  return (
    <header>
      <div className="container">
        <nav>
          <Link className="navbar-brand" to="/">
            <IosIonic
              rotate={true}
              fontSize="5rem"
              color="#03afc2"
              className="icon"
            />
          </Link>
          <ul className={navListStyle}>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger-container">
            <div
              className={hamburgerStyle}
              onClick={() => setHamburgerState(!hamburgerState)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
