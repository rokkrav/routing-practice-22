import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="app-logo"
      />
      <h1 className="app-name">Wave</h1>
    </div>
    <ul className="nav-options-list">
      <li className="nav-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
