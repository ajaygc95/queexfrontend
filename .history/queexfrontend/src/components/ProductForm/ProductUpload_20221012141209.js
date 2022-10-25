import { containerClasses } from "@mui/system";
import React from "react";

function ProductUpload() {
  return (
    <>
      <div className="form-container">
        <form action="" className="from-input">
          <input type="text" className="input-field" placeholder="upc"/>
          <input type="text" className="input-field" placeholder="name"/>
          <input type="text" className="input-field" placeholder="description"/>
          <input type="text" className="input-field" placeholder=""/>
          <input type="text" className="input-field" placeholder="upc"/>

        </form>
      </div>
    </>
  );
}

export default ProductUpload;
