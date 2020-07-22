import React, { useReducer } from 'react';
import { Login as LoginState, GoogleModel, UserModel } from '../login/LoginInterface';
import reducer from '../../states/User';

const initialState = { count: 0 };

export default class LoginGoogle extends React.Component<{ location: any }> {
    const [state: any, dispatch: any] = useReducer(reducer:any, initialState: any): any;

    state = {
        loading: true,
        error: null,
        google: new GoogleModel(),
        user: new UserModel()
    };

    
    async componentDidMount() {
        this.loginCallBack();
    }

    loginCallBack = async () => {
        const res = await fetch(`/api/auth/google/callback${this.props.location.search}`, { headers: new Headers({ accept: 'application/json' }) })
        if (res.ok) {
            const data = await res.json();
            this.setState({ user: data.user, google: data.google, loading: false }, () => console.log(this.state.google))
        }
    }

    render() {
        const { loading, error } = this.state;
        if (loading) {
            return 'Loading....';
        }

        if (error) {
            return (
                <div>
                    <p>Error:</p>
                    <code className="Code-block">{error}</code>
                </div>
            );
        }

        return (
            <div>
                <details>
                    {/* <summary>Welcome {google.nick_name ?? ''}</summary> */}
                    <p>Here is your info: </p>
                    {/* <code className="Code-block">{JSON.stringify(data, null, 2)}</code> */}
                </details>
            </div>
        );
    }
}
