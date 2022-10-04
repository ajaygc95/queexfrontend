import React from "react";

import "./Button.css";

import { link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];
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
