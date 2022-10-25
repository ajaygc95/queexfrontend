import react, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const MovieProvider = (props) => {
  const themes = "This is them";

  {
    /* This is to send data to different components. Coube have been 
    used instead of {props.children}
    <Navbar />
    <Home /> */
  }
  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
