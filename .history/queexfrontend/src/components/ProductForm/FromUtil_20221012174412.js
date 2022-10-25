import React from "react";

function FromUtil(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input className="input-field" {...inputProps} onChange={onChange} />
      <span className="error-message" required>
        {errorMessage}
      </span>
    </div>
  );
}

export default FromUtil;
