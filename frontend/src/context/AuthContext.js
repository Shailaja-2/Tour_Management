import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: localStorage.getItem("user") !== undefined 
  ? JSON.parse(localStorage.getItem("user"))
  :null,
  loading: false,
  error: null,
};
 
export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);


useEffect(()=>{
  localStorage.setItem("user", JSON.stringify(state.user));
}, [state.user]);



  // // Set user after localStorage is available (only on client)
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     try {
  //       dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(storedUser) });
  //     } catch (e) {
  //       console.error("Failed to parse user JSON:", e);
  //       localStorage.removeItem("user"); // corrupt data, remove it
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (state.user) {
  //     localStorage.setItem("user", JSON.stringify(state.user));
  //   } else {
  //     localStorage.removeItem("user");
  //   }
  // }, [state.user]);






  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
