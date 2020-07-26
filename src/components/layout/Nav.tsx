import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.scss';
import CONFIG from '../../configs/config';

export default function Nav() {
  console.log('%c RENDER NAVBAR', 'color: orange; font-size: 20px')
  return (
    <nav className="navbar nav-tick">
      <ul className="nav-menu">
        <li><Link to='/' className="item">Home</Link></li>
        <li><Link to='/tin-tuc-anime' className="item">Tin tức anime</Link></li>
        <li><Link to='/nhan-vat' className="item">Nhân vật</Link></li>
        <li><Link className="item" to={CONFIG.GOOGLE_LOGIN_URL}>Sign in with Google</Link></li>
      </ul>
    </nav>
  )
}
