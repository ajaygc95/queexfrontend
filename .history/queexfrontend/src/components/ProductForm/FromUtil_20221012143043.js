import React from "react";

function FromUtil(props) {
  return (
    <div className="form-container">
      <form action="" className="from-input">
        <div className="form-field">
          {/* <label>UPC</label> */}
          <input
            type="text"
            className="input-field"
            placeholder={props.placeholder}
          />
        </div>
    </div>
  );
}

export default FromUtil;
