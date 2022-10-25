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

export const MovieProvider = () => {
  return <ThemeContext.Provider>
    
  </ThemeContext.Provider>;
};
