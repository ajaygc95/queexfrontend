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
    console.log("handle submit clicked!!!");
  };

  return (
    <>
      <div className="from-container">
        <form>
          <FromUtil placeholder="upc" setUpc={setUpc} />
          <FromUtil placeholder="Name" />
          <FromUtil placeholder="Quantity" />
          <FromUtil placeholder="Price" />
          <FromUtil placeholder="Category" />
          <Button buttonStyle="btn--secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
