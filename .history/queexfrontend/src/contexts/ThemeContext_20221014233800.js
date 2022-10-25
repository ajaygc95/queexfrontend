import react, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    color: "#000000",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "#ffffff",
  },
};

export const MovieProvider = (props) => {
  {
    /* This is to send data to different components. Coube have been 
    used instead of {props.children}
    <Navbar />
    <Home /> */
  }
  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
};
