import React from "react";

function FromUtil(props) {
  return (
    <div className="form-field">
      {/* <label>UPC</label> */}
      <input
        type="text"
        className="input-field"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FromUtil;
