import { ThemeContext } from "@emotion/react";
import React, { useContext } from "react";

function ContextTest() {
  const themes = useContext(ThemeContext);
  return <div>{themes}</div>;
}

export default ContextTest;
