import React from "react";

function FromUtil(props) {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input {...inputProps} on change={onChange} />
    </div>
  );
}

export default FromUtil;
