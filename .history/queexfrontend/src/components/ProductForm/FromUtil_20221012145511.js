import React from "react";

function FromUtil(props) {
  return (
    <div className="form-field">
      {/* <label>UPC</label> */}
      <input
      name={prop}
        type="text"
        className="input-field"
        placeholder={props.placeholder}
        onChange={(e) => props.setUpc(e.target.value)}
      />
    </div>
  );
}

export default FromUtil;
