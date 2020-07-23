import React, { useReducer, useEffect } from "react";
import countReducer, { userReducer } from "../../reducers/User";
import { initialUserState, userState } from '../../states/User';

export default function LoginGoogle() {
    const [state, dispatch] = useReducer(countReducer, initialUserState);
    const [userInfo, dispatchUser] = useReducer(userReducer, userState);

    async function getUserInformation() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const json = await response.json();
        dispatchUser({ type: "GET_USER_INFO", payload: json });
        console.log(json);
    }

    /**
     * Same with componentDidMount()
     */
    useEffect(() => {
        getUserInformation();
    }, []);

    const handleIncrement = async () => {
        dispatch({ type: "decrement" })
    }

    return (
        <>
            <p>User: {userInfo.name}</p>
             Count: {state.count}
            <button onClick={handleIncrement}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
    );
}

// import React from 'react';
// import { Login as LoginState, GoogleModel, UserModel } from '../login/LoginInterface';

// export default class LoginGoogle extends React.Component<{ location: any }, LoginState> {
//     state = {
//         loading: true,
//         error: null,
//         google: new GoogleModel(),
//         user: new UserModel()
//     };


//     async componentDidMount() {
//         this.loginCallBack();
//     }

//     loginCallBack = async () => {
//         const res = await fetch(`/api/auth/google/callback${this.props.location.search}`, { headers: new Headers({ accept: 'application/json' }) })
//         if (res.ok) {
//             const data = await res.json();
//             this.setState({ user: data.user, google: data.google, loading: false }, () => console.log(this.state))
//         }
//     }

//     render() {
//         const { loading, error, google } = this.state;
//         if (loading) {
//             return 'Loading....';
//         }

//         if (error) {
//             return (
//                 <div>
//                     <p>Error:</p>
//                     <code className="Code-block">{error}</code>
//                 </div>
//             );
//         }

//         return (
//             <div>
//                 <details>
//                     {google.user.email}
//                     {/* <summary>Welcome {google.nick_name ?? ''}</summary> */}
//                     <p>Here is your info: </p>
//                     {/* <code className="Code-block">{JSON.stringify(data, null, 2)}</code> */}
//                 </details>
//             </div>
//         );
//     }
// }
