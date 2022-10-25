import React from "react";

function FromUtil(props) {
  return (
    <div className="form-field">
      <label>{props.name}</label>
      <input
        name={props.name}
        type="text"
        className="input-field"
        placeholder={props.placeholder}
        onChange={(e) => props.setUpc(e.target.value)}
      />
    </div>
  );
}

export default FromUtil;
