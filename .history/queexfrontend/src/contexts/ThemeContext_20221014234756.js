import react, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const MovieProvider = (props) => {
    const [themes, setThemes] = useState()

  {
    /* This is to send data to different components. Coube have been 
    used instead of {props.children}
    <Navbar />
    <Home /> */
  }
  return (
    <ThemeContext.Provider value={[]}>{props.children}</ThemeContext.Provider>
  );
};
