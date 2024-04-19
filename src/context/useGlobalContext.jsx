import { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";
export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    navbarBgColor: "base-300",
  });

  dispatch({
    type: "CHANGE_COLOR",
    payload: "green",
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
