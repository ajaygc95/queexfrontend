import React from "react";

function FromUtil(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input className="input-field" {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FromUtil;
