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
          <input type="text" className="input-field" placeholder="quantity"/>
          <input type="text" className="input-field" placeholder="price"/>
          <input type="text" className="input-field" placeholder="price"/>

        </form>
      </div>
    </>
  );
}

export default ProductUpload;
