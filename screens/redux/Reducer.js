import { TOGGLE_THEME } from "./Constant";

const initialState = {
  theme: "light",
  colors : {
    background : "#f5f5ff",
    text : "#000"
  }
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
        const newTheme = state.theme === "light" ? "dark" : "light"
      return {
        ...state,
        theme: newTheme,
        colors:
          newTheme === "dark" 
            ? {
                background: "#0a0908",
                text: "#fff",
              }
            : {
                background: "#f5f5ff",
                text: "black",
              },
      };

    default:
      return state;
  }
};
