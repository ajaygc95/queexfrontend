import { containerClasses } from "@mui/system";
import React, { useDeferredValue, useRef, useState } from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
import { Button } from "./../Button/Button";
function ProductUpload() {
  //    use useRef() function to handle insted up useState()
  const [upc, setUpc] = useState("");

  console.log(upc);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("handle submit clicked!!!");
  };

  return (
    <>
      <div className="from-container">
        <form >
          <FromUtil name="upc" placeholder="upc" setUpc={setUpc} />
          <FromUtil name="name" placeholder="Name" />
          <FromUtil name="quantity" placeholder="Quantity" />
          <FromUtil name="price" placeholder="Price" />
          <FromUtil name="category" placeholder="Category" />
          <Button buttonStyle="btn--secondary">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
