import React from "react";

function FromUtil() {
  return (
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
          <label>Quantity</label>
          <input type="text" className="input-field" placeholder="quantity" />
        </div>
        <div className="form-field">
          <label>Price</label>
          <input type="text" className="input-field" placeholder="price" />
        </div>
        <div className="form-field">
          <label>Category</label>
          <input type="text" className="input-field" placeholder="category" />
        </div>
      </form>
    </div>
  );
}

export default FromUtil;
