import React from "react";
import { Login } from "../components/interfaces/login";

export const userState = {
  isAuthenticated: false,
  token: null,
  user: {}
};

export const AuthContext = React.createContext<{ state: Login; dispatch: React.Dispatch<any>; }>({ state: userState, dispatch: () => null });

export function userReducer(state: Login, action: any) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};
