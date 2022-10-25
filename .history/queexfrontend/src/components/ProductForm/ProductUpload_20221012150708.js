import { containerClasses } from "@mui/system";
import React, { useDeferredValue, useRef, useState } from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
import { Button } from "./../Button/Button";
function ProductUpload() {
  //    use useRef() function to handle insted up useState()
  const [values, setValues] = useState({
    upc: "",
    name: "",
    quantity: 0,
    price: 0,
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
      <h1>Add Items</h1>
      <div className="from-container">
        <form onSubmit={handleSubmit}>
          <FromUtil name="upc" placeholder="upc" />
          <FromUtil name="name" placeholder="Name" />
          <FromUtil name="quantity" placeholder="Quantity" />
          <FromUtil name="price" placeholder="Price" />
          <FromUtil name="category" placeholder="Category" />
          <button> Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
