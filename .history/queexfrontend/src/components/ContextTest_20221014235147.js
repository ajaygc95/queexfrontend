import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

function ContextTest() {
  const themes = useContext(ThemeContext);
  return <div>{themes}</div>;
}

export default ContextTest;
