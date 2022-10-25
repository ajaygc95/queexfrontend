import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

function ContextTest() {
  const [themes, setThemes] = useContext(ThemeContext);
  return <div>{themes.map((theme) => ({ }))}</div>;
}

export default ContextTest;
