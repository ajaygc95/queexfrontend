import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

function ContextTest() {
  const theme = useContext(ThemeContext);
  return <div></div>;
}

export default ContextTest;
