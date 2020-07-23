import React from 'react';
import '../styles/Menu.scss';
import { CONFIG } from '../components/configs/config';

export default class Menu extends React.Component {
    state = {
        isFixed: false,
        offsetTop: 50
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.fixedNavBar);
        console.log(CONFIG.GOOGLE_LOGIN_URL);
        //this.getGoogleLoginURL();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.fixedNavBar);
    }

    getGoogleLoginURL = async () => {
        const res = await fetch('api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) });
        let data = null;
        console.log(res);

        if (res.ok) {
            data = await res.json();
            this.setState({ googleLoginUrl: data.url });
        }
    }

    fixedNavBar = () => {
        const { isFixed, offsetTop } = this.state;
        window.scrollY > offsetTop ? !isFixed && this.setState({ isFixed: true }) : isFixed && this.setState({ isFixed: false });
    }
    
    render() {
        const classFixed = this.state.isFixed ? 'affix' : '';

        return (
            <nav className={`navbar nav-tick ${classFixed}`}>
                <ul className="nav-menu">
                    <li>
                        <a className="item" href={CONFIG.GOOGLE_LOGIN_URL}>Sign in with Google</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
