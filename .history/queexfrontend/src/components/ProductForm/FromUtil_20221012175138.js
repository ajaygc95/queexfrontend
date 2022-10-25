import React from "react";

function FromUtil(props) {
  const { label, onChange, errorMessage, required, id, ...inputProps } = props;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input className="input-field" {...inputProps} onChange={onChange} onBlur/>
      <span className="error-message" required>
        {errorMessage}
      </span>
    </div>
  );
}

export default FromUtil;
