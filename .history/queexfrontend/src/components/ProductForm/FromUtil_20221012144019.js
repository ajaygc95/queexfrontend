import React from "react";

function FromUtil(props) {
  return (
    <div className="form-field">
      {/* <label>UPC</label> */}
      <input
        type="text"
        className="input-field"
        placeholder={props.placeholder}
        onChange={(e) => props.setUpc()}
      />
    </div>
  );
}

export default FromUtil;
