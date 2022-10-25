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
        <form>
          <FromUtil name="upc" placeholder="upc" setUpc={setUpc} />
          <FromUtil name="upc" placeholder="Name" />
          <FromUtil name="upc"  placeholder="Quantity" />
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