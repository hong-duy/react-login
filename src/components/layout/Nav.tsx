import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.scss';
import avatar from "../../images/avatar.svg";
import { AuthContext } from '../../reducers/Auth';
import { GoogleLogin } from 'react-google-login';
import { loginCallback } from '../../api/HandleRequest';
import { User } from '../interfaces/login';
import CONFIG from '../../configs/config';


export default function Nav() {
  const { state, dispatch } = useContext(AuthContext);
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem('user')!) as User;

  async function responseGoogleSuccess(response: any) {
    const res = await loginCallback('google', { identity_token: response.accessToken });
    dispatch({ type: "LOGIN", payload: res.result });
  }

  const responseGoogleFailure = (response: any) => {
    console.log(response);
  }

  // console.log('%c RENDER NAVBAR', 'color: orange; font-size: 20px')
  return (
    <nav className="navbar nav-tick">
      <div className="container">
        <ul className="nav-menu">
          <li><Link to='/' className="item">Home</Link></li>
          <li><Link to='/form' className="item">Form</Link></li>
          <li><Link to='/form-two' className="item">Editor customize</Link></li>
          <li><Link to='/form-three' className="item">Editor normal</Link></li>
          <li><Link to='/crop-image' className="item">Crop image</Link></li>
          <li><Link to='/tin-tuc-anime' className="item">News</Link></li>
          <li><Link to='/nhan-vat' className="item">Characters</Link></li>

          {
            state.isAuthenticated || isAuthenticated ?
              <li className="login"><button onClick={() => dispatch({ type: "LOGOUT" })}><img src={user.profile_url} alt="" /></button></li> :
              <li className="login">
                <GoogleLogin
                  clientId={CONFIG.GOOGLE_CLIENT_ID}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={avatar} alt="" /></button>
                  )}
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                  className="loginBtn loginBtn--google"
                  prompt="select_account"
                />
              </li>
          }
        </ul>
      </div>
    </nav>
  )
}
