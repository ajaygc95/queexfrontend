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

  const inputs = [
    { id: 1, name: "upc", type: "text", placeholder: "upc", label: "upc" },
    { id: 1, name: "name", type: "text", placeholder: "Name", label: "name" },
    { id: 1, name: "upc", type: "text", placeholder: "upc", label: "upc" },
    { id: 1, name: "upc", type: "text", placeholder: "upc", label: "upc" },
    { id: 1, name: "upc", type: "text", placeholder: "upc", label: "upc" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
      <div className="from-container">
        <form onSubmit={handleSubmit} className="form-field-container">
          <h1>Add Items</h1>
          <FromUtil name="Upc" placeholder="Upc" />
          <FromUtil name="Name" placeholder="Name" />
          <FromUtil name="Description" placeholder="Name" type="" />
          <FromUtil name="Quantity" placeholder="Quantity" />
          <FromUtil name="Price" placeholder="Price" />
          <FromUtil name="Category" placeholder="Category" />
          <button> Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
