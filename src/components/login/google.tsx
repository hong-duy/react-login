import React, { useReducer, useEffect } from "react";
import { userState, userReducer } from "../../reducers/User";
import { loginCallback } from '../../api/HandleRequest';

export default function LoginGoogle(props: any) {
    const [userInfo, dispatchUser] = useReducer(userReducer, userState);

    // async function getUserInformation() {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    //     const json = await response.json();
    //     dispatchUser({ type: "GET_USER_INFO", payload: json });
    //     console.log(json);
    // }

    /**
     * Same with componentDidMount()
     */
    useEffect(() => {
        async function login() {
            const res = await loginCallback('google', props.location.search);
            if (res.isError) {
                return dispatchUser({ type: "LOGIN_FAIL", payload: res.message });
            }

            return dispatchUser({ type: "LOGIN_SUCCESS", payload: res.result });
        }

        login();
    }, [props]);

    return (
        <>
            <p>User: {userInfo.user.email ?? ''}</p>
            <p>Token: {userInfo.token}</p>
        </>
        
    );
}
