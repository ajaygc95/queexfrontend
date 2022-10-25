import React from "react";

function FromUtil(props) {
  return (
    <div className="form-field">
      {/* <label>UPC</label> */}
      <input
        type="text"
        className="input-field"
        placeholder={props.placeholder}
        on
      />
    </div>
  );
}

export default FromUtil;
