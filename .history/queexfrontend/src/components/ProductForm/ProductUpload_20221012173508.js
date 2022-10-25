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
    {
      id: 1,
      name: "upc",
      type: "text",
      placeholder: "Upc",
      errorMessage:
        "Username shold be 3-16 character and shouldn't be any special character",
      label: "Upc",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "enter valid name",
      label: "Name",
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Description",

      errorMessage: "Enter valid desctiption ",
      label: "Description",
    },
    {
      id: 4,
      name: "quantity",
      type: "text",
      placeholder: "Quantity",

      errorMessage: "",
      label: "Quantity",
    },
    {
      id: 5,
      name: "price",
      type: "text",
      placeholder: "Price",

      errorMessage: "",
      label: "Price",
    },
    {
      id: 6,
      name: "category",
      type: "text",
      placeholder: "Category",

      errorMessage: "",
      label: "Category",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="from-container">
        <form onSubmit={handleSubmit} className="form-field-container">
          <h1>Add Items</h1>
          <div className="form-field-container">
            {inputs.map((input) => (
              <FromUtil
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>

          <button> Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
