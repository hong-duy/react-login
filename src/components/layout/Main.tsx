import React, { useReducer } from "react"
import Nav from '../layout/Nav';
import { userState, userReducer, AuthContext } from '../../reducers/Auth';

export default function Layout({ children }: any) {
	const [state, dispatch] = useReducer(userReducer, userState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			<Nav />
			{children}
		</AuthContext.Provider>
	)
}
