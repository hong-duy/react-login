export default function countReducer(state: any, action: any) {

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

export function userReducer(userState: any, action: any) {
  switch (action.type) {
    case "GET_USER_INFO":
      return { ...userState, ...action.payload };
    default:
      throw new Error();
  }
}
