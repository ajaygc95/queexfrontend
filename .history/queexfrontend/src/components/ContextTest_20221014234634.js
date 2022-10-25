import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

function ContextTest() {
  const value = useContext(ThemeContext);
  return <div>{value.}</div>;
}

export default ContextTest;
