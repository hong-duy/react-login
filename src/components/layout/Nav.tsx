import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.scss';
import CONFIG from '../../configs/config';
import { AuthContext } from '../../reducers/Auth';

export default function Nav() {
  const { state, dispatch } = useContext(AuthContext);

  console.log('%c RENDER NAVBAR', 'color: orange; font-size: 20px')
  return (
    <nav className="navbar nav-tick">
      <ul className="nav-menu">
        <li><Link to='/' className="item">Home</Link></li>
        <li><Link to='/tin-tuc-anime' className="item">Tin tức anime</Link></li>
        <li><Link to='/nhan-vat' className="item">Nhân vật</Link></li>
        {
          state.isAuthenticated ?
            <li><span onClick={() => dispatch({ type: "LOGOUT" })}>Email: {state.user.email}</span></li> :
            <li><a className="item" href={CONFIG.GOOGLE_LOGIN_URL}>Sign in with Google</a></li>
        }
      </ul>
    </nav>
  )
}
