import React, { useReducer, useEffect } from "react";
import { userState, userReducer } from "../../reducers/Auth";
import { loginCallback } from '../../api/HandleRequest';
import { useLocation } from 'react-router-dom';

export default function LoginGoogle() {
    const [, dispatchUser] = useReducer(userReducer, userState);
    const location = useLocation();

    /**
     * Same with componentDidMount()
     */
    useEffect(() => {
        async function login() {
            console.log(location.search)
            const res = await loginCallback('google', location.search);
            if (res.isError) {
                return dispatchUser({ type: "LOGIN_FAIL", payload: res.message });
            }

            dispatchUser({ type: "LOGIN", payload: res.result });   
        }

        login();
    }, [location.search]);

    // if (userInfo.isAuthenticated) {
    //     return <Redirect to="/" />
    // }

    return (
        <div>Login...</div>
    );
}
