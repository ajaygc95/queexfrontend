import { containerClasses } from "@mui/system";
import React from "react";
import "./ProductUpload.css";
function ProductUpload() {
  return (
    <>
      <div className="form-container">
        <form action="" className="from-input">
          <div className="form-field">
            <label>UPC</label>
            <input type="text" className="input-field" placeholder="upc" />
          </div>
          <div className="form-field">
            <label>Name</label>
            <input type="text" className="input-field" placeholder="name" />
          </div>
          <div className="form-field">
            <label>quantity</label>
            <input type="text" className="input-field" placeholder="quantity" />
          </div>
          <div className="form-field">
            <label>UPC</label>
            <input type="text" className="input-field" placeholder="price" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
