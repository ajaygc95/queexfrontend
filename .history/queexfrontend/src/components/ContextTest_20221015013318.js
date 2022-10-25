import React, { useContext } from "react";


function ContextTest() {
  const themes = useContext(ThemeContext);
  return <div>{themes}</div>;
}

export default ContextTest;
