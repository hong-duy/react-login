import React from 'react';
import '../styles/Menu.scss';

export default class Menu extends React.Component {
    state = {
        isFixed: false,
        offsetTop: 50,
        googleLoginUrl: null,
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.fixedNavBar);
        this.getGoogleLoginURL();
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

    handleClick = () => {
        console.log('login');
    }

    render() {
        const classFixed = this.state.isFixed ? 'affix' : '';
        const { googleLoginUrl } = this.state;

        return (
            <nav className={`navbar nav-tick ${classFixed}`}>
                {
                    googleLoginUrl && <ul className="nav-menu">
                        <li>
                            {/* <button className="item" onClick={this.handleClick}>Login</button> */}
                            <a className="item" href={googleLoginUrl ?? ''}>
                                Sign in with Google
                            </a>
                        </li>
                    </ul>
                }  
            </nav> 
        )
    }
}
