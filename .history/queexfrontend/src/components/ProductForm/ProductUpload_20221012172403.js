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
    { id: 2, name: "name", type: "text", placeholder: "Name", label: "Name" },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "Description",
    },
    {
      id: 4,
      name: "quantity",
      type: "text",
      placeholder: "Quantity",
      label: "Quantity",
    },
    {
      id: 5,
      name: "price",
      type: "text",
      placeholder: "Price",
      label: "Price",
    },
    {
      id: 6,
      name: "category",
      type: "text",
      placeholder: "Category",
      label: "Category",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues
  }

  return (
    <>
      <div className="from-container">
        <form onSubmit={handleSubmit} className="form-field-container">
          <h1>Add Items</h1>
          {inputs.map((input) => (
            <FromUtil key={input.id} {...input} value={values[input.name]} />
          ))}
          <button> Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
