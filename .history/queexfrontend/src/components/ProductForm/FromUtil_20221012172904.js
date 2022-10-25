import React from "react";

function FromUtil(props) {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input className="input-field" {...inputProps} onChange={onChange} />
    </div>
  );
}

export default FromUtil;
