import React from "react";

import "./Button.css";

import { link } from "react-router-dom";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyel = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
};
