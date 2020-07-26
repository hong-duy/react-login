import { Login } from "../components/interfaces/login";

export function countReducer(state: any, action: any) {

  switch (action.type) {

    case "increment":
      console.log(state);
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const userState = {
  loading: false,
  error: false,
  message: null,
  token: null,
  user: {}
} as Login;

export function userReducer(state: Login, action: any) {
  switch (action.type) {
    case "LOGIN_FAIL":
      return { ...state, error: true, message: action.payload.message };
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload.token, user: action.payload.user };
    default:
      throw new Error();
  }
}
