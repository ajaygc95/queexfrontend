import React, { useState } from "react";

function FromUtil(props) {
  const { label, onChange, errorMessage, required, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        className="input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus.toString()} focused={focused.}
      />
      <span className="error-message" required>
        {errorMessage}
      </span>
    </div>
  );
}

export default FromUtil;