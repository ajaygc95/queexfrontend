import { containerClasses } from "@mui/system";
import React, { useDeferredValue, useRef, useState } from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
import { Button } from "./../Button/Button";
import axios from "axios";
import { productListURL } from "../../constants";
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
      type: "number",
      placeholder: "Upc",
      errorMessage: "UPC should be just number ",
      required: true,
      pattern: "^[0-9]$",
      label: "Upc",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Enter valid name",
      required: true,
      label: "Name",
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Description",

      errorMessage: "Enter valid desctiption ",
      required: false,
      label: "Description",
    },
    {
      id: 4,
      name: "quantity",
      type: "number",
      placeholder: "Quantity",
      errorMessage: "Quantity should be number",
      required: false,
      label: "Quantity",
    },
    {
      id: 5,
      name: "price",
      type: "number",
      placeholder: "Price",
      errorMessage: "Price should be number",
      required: false,
      label: "Price",
    },
    {
      id: 6,
      name: "category",
      type: "text",
      placeholder: "Category",
      errorMessage: "Select from available category",
      required: false,
      label: "Category",
    },
  ];

  const categoryList = {
    options: [
      { name: "Alcohol" },
      { name: "Food" },
      { name: "Beverage" },
      { name: "Snacks" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    // console.log(data);
    axios
      .post(productListURL, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="from-container">
        <form onSubmit={handleSubmit} className="form-field-container">
          <h1>Add Items</h1>
          <hr />
          <div className="form-field-container">
            {inputs.map((input) => (
              <FromUtil
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <input
              name="category"
              type="text"
              value={values.category}
              onChange={onChange}
            >
              <slect value=""
            </input>
          </div>

          <button> Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
